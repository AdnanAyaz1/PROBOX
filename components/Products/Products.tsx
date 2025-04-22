import { Product } from "@/types/types";
import React from "react";
import ProductCard from "../Cards/ProductCard";
import Filter from "../Filter/Filter";

const Products = async ({ products }: { products: Product[] }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mt-10">
        <h1 className="text-2xl font-bold  text-orange-400">All Products</h1>
        <Filter />
      </div>
      {products.length === 0 ? (
        <div className="text-center text-2xl font-bold mt-10 text-orange-500">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 max-w-[1440px] mx-auto">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
