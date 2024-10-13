/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { fetchCategories } from '@/store/slice/categorySlice';
import { AppDispatch, RootState } from '@/store/store';
import { fetchProducts } from '@/store/slice/productSlice';
import { Product } from '@/interfaces/products';
import { useRouter } from 'next/navigation';
import { addToCard } from '@/store/slice/card';
import Loading from '@/components/Loading';
import ProductComponent from '@/components/Product';
export default function Page() {
	const dispatch = useDispatch<AppDispatch>();
	const { products, loading, error } = useSelector(
		(state: RootState) => state.products
	);
	const router = useRouter();

	const { items: category, status } = useSelector(
		(state: RootState) => state.categories
	);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCategories());
		}
		dispatch(fetchProducts());
	}, [status, dispatch]);

	return (
		<div className='container mx-auto p-4'>
			<div className='bg-gray-800 text-white py-16 px-6 rounded-lg shadow-lg text-center'>
				<h1 className='text-4xl font-bold mb-4'>
					Welcome to the Best Online Shop!
				</h1>
				<p className='text-lg mb-6'>
					Explore a wide range of categories and find the best products at
					unbeatable prices.
				</p>
				<Link href='/products'>
					<p className='bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300'>
						Shop Now
					</p>
				</Link>
			</div>

			<section className='my-12'>
				<h2 className='text-3xl font-bold mb-4 text-center'>
					Shop by Category
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{status === 'loading' ? (
						<Loading />
					) : (
						category.map((cat, index) => (
							<Link href={`/category/${cat}`} key={index}>
								<div className='border cursor-pointer border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 bg-white hover:bg-gray-50'>
									<h3 className='text-xl font-semibold capitalize text-center text-gray-800'>
										{cat}
									</h3>
								</div>
							</Link>
						))
					)}
				</div>
			</section>

			<section className='my-12'>
				<h2 className='text-3xl font-bold mb-4 text-center'>
					Featured Products
				</h2>
				{loading && <Loading />}
				{error && <p className='text-red-500'>{error}</p>}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{products.map((product: Product) => (
						<ProductComponent product={product} key={product.id} />
					))}
				</div>
			</section>
		</div>
	);
}
