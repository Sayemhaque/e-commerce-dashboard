// "use server";

// import db from "../db";
// import { user } from "../db/schema";

// export const signUp = async (
//   formData: FormData
// ): Promise<"An error occurred" | undefined> => {
//   "use server";
//   console.log(formData);

//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const userData = { name, email, password };

//   try {
//     await db.insert(user).values({ id: 2, ...userData });
//   } catch (error) {
//     return "An error occurred";
//   }
// };
