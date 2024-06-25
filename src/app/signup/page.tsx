"use client";

import Link from "next/link";
import React, { ChangeEvent, useActionState, useId, useState } from "react";
import { signUp } from "../../../actions/auth-actions";

export default function Signup() {
  const [error, action, pending] = useActionState(signUp, null);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
        <form action={action}>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='username'>
              Username
            </label>
            <input
              type='text'
              name='name'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
              {pending ? "Loading..." : "Sign up"}
            </button>
            <Link
              href='/login'
              className='text-sm text-blue-500 hover:underline'>
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
