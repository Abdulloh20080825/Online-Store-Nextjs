'use client';
/* eslint-disable @next/next/no-img-element */

import { Product, ProductType } from '@/interfaces/products';
import { addToCard } from '@/store/slice/card';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const Product: React.FC<ProductType> = ({ product }) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleAddToCart = (product: Product) => {
		dispatch(addToCard(product));
	};
	return (
		<div
			key={product.id}
			className='border flex flex-col justify-between border-gray-700 rounded-lg p-4 bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300'
		>
			<img
				src={product.image}
				alt={product.title}
				className='w-full h-64 object-contain mb-4'
			/>
			<h2 className='text-xl font-semibold mb-2 text-white'>{product.title}</h2>
			<p className='text-gray-400 mb-2'>${product.price.toFixed(2)}</p>
			<p className='text-sm text-gray-500'>{product.category}</p>
			<div className='flex justify-between mt-4'>
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'
					onClick={() => handleAddToCart(product)}
				>
					Add to Cart
				</button>
				<button
					className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300'
					onClick={() => router.push(`/product/${product.id}`)}
				>
					View Product
				</button>
			</div>
		</div>
	);
};

export default Product;
