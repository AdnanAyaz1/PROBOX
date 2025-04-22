"use client";
import { addToCart } from "@/lib/redux/cartSlice";
import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        quantity: 1,
        img: product.img,
      })
    );
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div
      key={product?.id}
      className="shadow-gray-200/10 dark-gradient rounded-lg p-4 shadow-md overflow-hidden"
    >
      <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
        <Image
          src={product?.img}
          alt={product?.name}
          fill
          className=" object-cover rounded-lg cursor-pointer  hover:scale-105 transition duration-200 ease-in-out"
        />
      </div>
      <h2 className="text-xl font-semibold mt-2 text-white">{product?.name}</h2>
      <p className="text-lg font-bold mt-2 text-orange-400">
        ${product?.price}
      </p>
      <button
        className="mt-4 text-white flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 hover:opacity-80 w-full py-2 rounded-lg  cursor-pointer transition duration-200 ease-in-out"
        onClick={handleAddtoCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
