import { Suspense } from "react";
import NotFoundSearchParams from "@/components/NotFoundSearchParams";

export default function NotFoundPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Suspense fallback={<p>Loading error info...</p>}>
        <NotFoundSearchParams />
      </Suspense>
    </div>
  );
}
