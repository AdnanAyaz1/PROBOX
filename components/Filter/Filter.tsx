"use client";
import { ArrowDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceFilter, setPriceFilter] = useState(
    searchParams.get("price") || "Filter by Price"
  );
  const [showDropDown, setShowDropdown] = useState(false);
  return (
    <div className="relative">
      <div
        className="flex items-center justify-between gap-6 px-4 py-2 cursor-pointer dark-gradient rounded-lg text-orange-400 font-semibold max-w-[200px]"
        onClick={() => setShowDropdown(!showDropDown)}
      >
        <div>{priceFilter}</div>
        <ArrowDown className="text-orange-400" />
      </div>
      {showDropDown && (
        <div className="absolute top-10 left-0 right-0 bg-black/70 shadow-lg rounded-md p-4 z-10">
          <ul className="flex flex-col gap-2 text-white">
            <li
              onClick={() => {
                setShowDropdown(false);
                setPriceFilter("Low to High");
                router.push("/?price=asc", { scroll: false });
              }}
              className="cursor-pointer hover:text-orange-400"
            >
              Low to High
            </li>
            <li
              onClick={() => {
                setShowDropdown(false);
                setPriceFilter("High to Low");
                router.push("/?price=desc", { scroll: false });
              }}
              className="cursor-pointer hover:text-orange-400"
            >
              High to Low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
