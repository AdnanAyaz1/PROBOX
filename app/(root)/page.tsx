import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import { Product } from "@/types/types";
import axios from "axios";

interface Props {
  searchParams: { [key: string]: string };
}

export default async function Home({ searchParams }: Props) {
  const { search, price } = await searchParams;

  const { data: products } = await axios.get<Product[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/items`
  );

 
  if (price === "asc") {
    products.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (price === "desc") {
    products.sort((a, b) => Number(b.price) - Number(a.price));
  }

  const filteredProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <main>
      <Hero />
      <Products products={filteredProducts} />
    </main>
  );
}
