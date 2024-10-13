/* eslint-disable @next/next/no-img-element */
'use client';

import { fetchProductById } from '@/store/slice/getOneProduct';
import { AppDispatch } from '@/store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { Product } from '@/interfaces/products';
import { addToCard } from '@/store/slice/card';
import Loading from '@/components/Loading';
import { ParamsType } from '@/types/paramsType';

const Page: React.FC<ParamsType> = ({ params }) => {
	const dispatch = useDispatch<AppDispatch>();
	const { product, loading, error } = useSelector(
		(state: RootState) => state.product
	);
	const router = useRouter();

	useEffect(() => {
		dispatch(fetchProductById(Number(params.id)));
	}, [dispatch, params.id]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <div className='text-red-500 text-center mt-10'>Error: {error}</div>;
	}

	const handleBack = () => router.back();
	const handleAddToCart = (product: Product) => {
		dispatch(addToCard(product));
	};

	return (
		<div className='container mx-auto p-4'>
			{product ? (
				<div className='max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-bold text-white mb-4 text-center'>
						{product.title}
					</h1>
					<img
						src={product.image}
						alt={product.title}
						className='w-full h-96 object-contain rounded-lg mb-6'
					/>
					<p className='text-gray-400 mb-4'>{product.description}</p>
					<p className='text-2xl font-semibold text-blue-400 mb-4'>
						${product.price.toFixed(2)}
					</p>
					<div className='flex justify-center space-x-5'>
						<button
							className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors '
							onClick={() => handleAddToCart(product)}
						>
							Add to Cart
						</button>
						<button
							className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors'
							onClick={handleBack}
						>
							Go Back
						</button>
					</div>
				</div>
			) : (
				<p className='text-white text-center'>Product not found</p>
			)}
		</div>
	);
};

export default Page;
