"use client";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [query, setQuery] = useState(params.get("search") || "");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);
  return (
    <div className="relative ">
      <Search className="absolute left-4 top-3 h-4 w-4 text-orange-400" />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-11 pr-4 py-2 border rounded-full dark-gradient border-none outline-none  "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
