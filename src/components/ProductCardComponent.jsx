"use client";
import Image from "next/image";
import React, { useState } from "react";

function isValidImageSrc(src) {
  return (
    typeof src === "string" &&
    (src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/"))
  );
}

const ProductCardComponent = ({ product }) => {
  const safeProduct = product ?? {};

  // Fallback image URL
  const fallbackImage = "/vercel.svg";

  const [imgSrc, setImgSrc] = useState(
    isValidImageSrc(safeProduct.imageUrl)
      ? safeProduct.imageUrl
      : fallbackImage,
  );

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-hover duration-300 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={imgSrc}
          alt={safeProduct.name ?? "Product image"}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover"
          // If the image fails to load, switch to fallback
          onError={() => setImgSrc(fallbackImage)}
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            {safeProduct.name ?? "Unnamed product"}
          </h2>
          <span className="text-lg font-semibold text-blue-600">
            ${Number(safeProduct.price ?? 0).toLocaleString()}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {safeProduct.description ?? "No description available."}
        </p>

        <div className="flex flex-col gap-2">
          <button className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
