/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	incrementQuantity,
	decrementQuantity,
	removeAll,
} from '@/store/slice/card';
import { Product } from '@/interfaces/products';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '@/store/store';
import { RootState } from '@/store/store';

export default function CartPage() {
	const dispatch = useDispatch<AppDispatch>();
	const products = useSelector((state: RootState) => state.card);
	const totalQuantity = products.reduce(
		(total: number, product: Product) => total + product.quantity,
		0
	);
	const router = useRouter();
	console.log(products);
	const totalPrice = products
		.reduce(
			(total: number, product: Product) =>
				total + product.price * product.quantity,
			0
		)
		.toFixed(2);

	const handleIncrement = (productId: number) => {
		dispatch(incrementQuantity(productId));
	};

	const handleDecrement = (productId: number) => {
		dispatch(decrementQuantity(productId));
	};

	const handleClearAll = () => {
		dispatch(removeAll());
	};

	return (
		<div className='max-w-[1000px] mx-auto'>
			<div className='px-5 py-10 flex flex-col space-y-10'>
				<div className='w-full'>
					<h1 className='text-2xl font-semibold mb-4'>Products in Your Cart</h1>
					<div className='border border-gray-600 rounded p-4'>
						{products.length ? (
							products.map((product: Product) => (
								<div
									key={product.id}
									className='flex justify-between items-center px-5 py-3 border-b border-gray-300 last:border-b-0'
								>
									<img
										src={product.image}
										alt={product.title}
										className='w-16 h-16 object-cover rounded'
									/>
									<p className='text-lg font-medium'>
										{product.title.length >= 30
											? product.title.slice(0, 30) + '...'
											: product.title}
									</p>
									<p className='text-lg font-semibold'>
										${product.price.toFixed(2)}
									</p>
									<div className='flex space-x-3 items-center'>
										<button
											className='border px-2 rounded bg-gray-200 hover:bg-gray-300 transition text-black font-bold text-xl'
											onClick={() => handleIncrement(product.id)}
										>
											+
										</button>
										<p className='text-lg'>{product.quantity}</p>
										<button
											className='border px-2 rounded bg-gray-200 hover:bg-gray-300 transition text-black font-bold text-xl'
											onClick={() => handleDecrement(product.id)}
										>
											-
										</button>
									</div>
								</div>
							))
						) : (
							<div className='flex justify-between flex-col'>
								<p className='text-center text-gray-600 py-4'>
									No products in the cart.
								</p>
								<button onClick={() => router.push('/products')}>
									Continue Shopping {'->'}
								</button>
							</div>
						)}
					</div>
				</div>

				<div className='w-full text-right'>
					<p className='text-xl font-semibold mb-2'>
						Total Products: {totalQuantity}
					</p>
					<p className='text-xl font-semibold mb-4'>
						Total Price: ${totalPrice}
					</p>
					<button
						className='bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition'
						onClick={handleClearAll}
					>
						Clear All
					</button>
				</div>
			</div>
		</div>
	);
}
