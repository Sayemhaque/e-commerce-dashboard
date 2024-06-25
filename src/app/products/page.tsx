import React from "react";
import { Product, product } from "../../../db/schema";
import db from "../../../db";
import Image from "next/image";
import TableImage from "./components/table-image";

export default async function ProductTable() {
  const products: Product[] = await db.select().from(product);
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white border border-gray-200'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Product Name</th>
            <th className='py-2 px-4 border-b'>Price</th>
            <th className='py-2 px-4 border-b'>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className='text-center'>
              <td className='py-2 px-4 border-b'>{product.name}</td>
              <td className='py-2 px-4 border-b'>${product.price}</td>
              <td className='py-2 px-4 border-b'>
                {product.photo && <TableImage photo={product.photo} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
