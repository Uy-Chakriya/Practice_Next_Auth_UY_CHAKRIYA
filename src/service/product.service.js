import headerToken from "@/lib/headerToken";

export async function getAllProductService() {
  const headers = await headerToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    headers,
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.payload)) {
    return data.payload;
  }

  return [];
}



// import { auth } from "@/auth";
// import headerToken from "@/lib/headerToken";

// export async function getAllProductService() {
//   const session = await auth();
//   const headers = await headerToken();
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
//     headers,
//   });
//   const products = await res.json();
//   return products;
// }
