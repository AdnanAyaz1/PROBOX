"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import CartItemCard from "@/components/Cards/CartItemCard";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartProducts);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="mt-20 px-4">
        <h1 className="text-2xl font-semibold text-orange-400 my-4">
          Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-20 px-4 min-h-screen">
      <h1 className="text-2xl font-semibold text-orange-400 my-4">
        Cart Items
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[1440px] mx-auto">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="dark-gradient rounded-lg p-6 h-fit shadow-lg">
          <h2 className="text-xl font-semibold text-orange-400 mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 mb-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-orange-300"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-orange-400/20 pt-4 mt-4">
            <div className="flex justify-between text-lg font-semibold text-orange-400">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
