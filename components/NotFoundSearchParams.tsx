// components/NotFoundSearchParams.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundSearchParams() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return <p className="text-red-500">Error: {error ?? "Page not found"}</p>;
}
