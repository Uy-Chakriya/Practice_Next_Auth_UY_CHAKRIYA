import { auth } from "@/auth";
import ProductCardComponent from "@/components/ProductCardComponent";
import { getAllProductService } from "@/service/product.service";
import React from "react";

export default async function page() {
  const session = await auth();
  const products = await getAllProductService();
  console.log("this is session in products page :", session);
  return (
    <div className="flex justify-center gap-10">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
}
