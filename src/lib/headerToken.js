
import { auth } from "@/auth";

export default async function headerToken() {
  const session = await auth();
  const token =
    session?.user?.token ??
    session?.user?.accessToken ??
    session?.user?.access_token ??
    "";

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}



// import { auth } from "@/auth";

// export default async function headerToken() {
//   const session = await auth();
//   return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${session?.user?.token}`,
//   };
// }




// import { auth } from "@/auth";

// export default async function headerToken() {
//   const session = await auth();
//   const token =
//     session?.user?.token ??
//     session?.user?.accessToken ??
//     session?.user?.access_token ??
//     "";

//   return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };
// }

