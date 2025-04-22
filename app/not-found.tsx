"use client";

import { Suspense } from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="mb-4">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return Home
        </Link>
      </div>
    </Suspense>
  );
}
