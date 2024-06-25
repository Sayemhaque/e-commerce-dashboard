"use server";

import { revalidatePath } from "next/cache";
import db from "../db";
import { Product, product } from "../db/schema";
import axios from "axios";

export const addProduct = async (data: Product) => {
  await db.insert(product).values(data);
  revalidatePath("/products");
};
