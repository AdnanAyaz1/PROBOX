"use client";

import React from "react";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import SearchBar from "./Search/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const Navbar = () => {
  const cartCount = useSelector(
    (state: RootState) => state.cart.cartProducts.length
  );

  return (
    <div className="border-b border-gray-200/20 fixed top-0 z-100 backdrop-blur-md w-full bg-black/90">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 font-urbanist text-orange-400">
        {/* Logo */}
        <Link href={"/"} className="flex">
          <div className="text-2xl">
            <span className="font-bold">Rondo</span>
            <span className="text-xl text-white">Store</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl ml-6 max-sm:hidden">
          <SearchBar />
        </div>

        {/* Cart and Login */}
        <div className="flex items-center ml-4 space-x-4">
          <Link
            href="/product"
            className="text-white flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 hover:opacity-80 w-full py-2 rounded-lg text-sm px-4 cursor-pointer transition duration-200 ease-in-out"
          >
            Add a Product
          </Link>
          <Link
            href="/cart"
            className="relative p-2 hover:scale-110 cursor-pointer rounded-full"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="p-2 hover:scale-110 cursor-pointer rounded-full max-sm:hidden">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
