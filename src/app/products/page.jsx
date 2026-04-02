import { auth } from "@/auth";
import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";

const fallbackProducts = [
  {
    id: "fallback-1",
    name: "iPhone 17 Pro",
    description: "A premium smartphone with a bright display.",
    imageUrl: "/vercel.svg",
    price: 1499,
  },
  {
    id: "fallback-2",
    name: "Galaxy S Ultra",
    description: "Powerful camera system and all-day battery.",
    imageUrl: "/vercel.svg",
    price: 1399,
  },
  {
    id: "fallback-3",
    name: "Pixel Pro",
    description: "Clean software experience with great AI tools.",
    imageUrl: "/vercel.svg",
    price: 1199,
  },
];

export default async function page() {
  const session = await auth();
  const products = await getAllProductService();
  Array.isArray(products) && products.length > 0 ? products : fallbackProducts;
  console.log("this is session in products page :", session);
  return (
    <div className="min-h-screen flex justify-center m-10 items-center gap-10 flex-wrap">
      {products.map((product) => (
        // <ProductCardComponent key={product.id} product={product} />

        <ProductCardComponent
          key={product.id ?? product.productId ?? product.name}
          product={product}
        />
      ))}
    </div>
  );
}
