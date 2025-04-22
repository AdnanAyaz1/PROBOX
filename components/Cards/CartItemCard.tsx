import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "@/lib/redux/cartSlice";
import { CartItem } from "@/types/types";

const CartItemCard = ({
  item,
}: {
  item: CartItem;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="dark-gradient rounded-lg p-4 shadow-lg">
      <div className="flex gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg">
          <Image src={item.img} alt={item.name} fill className="object-cover" />
        </div>

        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-lg text-orange-400">{item.name}</h3>
          <p className="text-orange-500">${item.price}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-400/10 rounded-lg">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="p-1 hover:bg-orange-400/20 rounded-l-lg"
              >
                <Minus className="w-4 h-4 text-orange-400" />
              </button>
              <span className="w-8 text-center text-orange-400">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(increaseQty((item.id)))}
                className="p-1 hover:bg-orange-400/20 rounded-r-lg"
              >
                <Plus className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart((item.id)))}
              className="p-1 hover:bg-orange-400/10 rounded-lg text-orange-400"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
