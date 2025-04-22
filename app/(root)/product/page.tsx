"use client";

import { productSchema } from "@/schemas/validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { UploadCloudIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof productSchema>;

const AddProduct = () => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: FormData) => {
    const img = getValues("img");

    if (!img) {
      toast.error("Please upload an image");
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        ...data,
        img,
      });
      toast.success("Product added successfully");
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4">
      <h1 className="text-2xl font-semibold text-orange-400 mt-20">
        Add a Product
      </h1>

      <CldUploadWidget
        uploadPreset="NewUpload"
        onSuccess={(results) => {
          if (
            results.event === "success" &&
            typeof results.info === "object" &&
            results.info !== null
          ) {
            setImagePreview(results.info.secure_url);
            setValue("img", results.info.secure_url, {
              shouldValidate: true,
            });
          }
        }}
      >
        {({ open }) => (
          <div
            onClick={() => open()}
            className="dark-gradient cursor-pointer h-[50px] px-4 w-fit rounded-xl mt-8 flex items-center justify-center gap-2"
          >
            <UploadCloudIcon className="w-8 h-5 text-white" />
            <span className="text-orange-400">Upload Image</span>
          </div>
        )}
      </CldUploadWidget>

      {imagePreview && (
        <div className="rounded-full h-[200px] w-[200px] relative overflow-hidden mt-4">
          <Image
            src={imagePreview as string}
            alt="product image"
            fill
            className={`object-cover transition-opacity duration-300 `}
          />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 mt-8">
        {/* Name */}
        <div className="max-w-[700px] w-full">
          <label
            htmlFor="name"
            className={`block mb-2 font-medium ${
              errors.name ? "text-red-500" : "text-orange-400"
            }`}
          >
            Product Name
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder="Name"
            className={`dark-gradient placeholder:text-orange-300/50 py-4 px-4 rounded-lg shadow-md w-full outline-none ${
              errors.name
                ? "border border-red-500 text-red-500"
                : "text-orange-400"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="max-w-[700px] w-full">
          <label
            htmlFor="price"
            className={`block mb-2 font-medium ${
              errors.price ? "text-red-500" : "text-orange-400"
            }`}
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { valueAsNumber: true })}
            placeholder="Price"
            className={`dark-gradient py-4 px-4 placeholder:text-orange-300/50 rounded-lg shadow-md w-full outline-none ${
              errors.price
                ? "border border-red-500 text-red-500"
                : "text-orange-400"
            }`}
          />
          {errors.price && (
            <p className="text-red-500 mt-2">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-white flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 hover:opacity-80 py-4 rounded-lg  px-4 cursor-pointer text-base transition duration-200 ease-in-out w-full max-w-[200px]"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
