"use client";

import axios from "axios";
import { addProduct } from "../../../actions/product-action";
import { uploadImage } from "../../../services/image-upload";

export default function ProductForm() {
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("productName") as string;
    const photo = formData.get("photo");
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;

    if (name && description && price && photo) {
      try {
        const uploadedPhotoData = await uploadImage(photo);
        const productData = {
          name,
          description,
          photo: uploadedPhotoData.data.url,
          price,
        };
        addProduct(productData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='max-w-md mx-auto my-8'>
      <form
        action={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label
            htmlFor='productName'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Product Name
          </label>
          <input
            type='text'
            name='productName'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter product name'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Description
          </label>
          <textarea
            name='description'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter product description'
            rows={8}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='photo'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Description
          </label>
          <input
            type='file'
            name='photo'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter product description'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='price'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Price
          </label>
          <input
            type='number'
            name='price'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter product price'
            required
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}
