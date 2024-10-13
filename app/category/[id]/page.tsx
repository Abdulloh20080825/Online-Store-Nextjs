'use client';

import Product from '@/components/Product';
import { filterByCategories } from '@/store/slice/filterByCategory';
import { RootState } from '@/store/store';
import { ParamsType } from '@/types/paramsType';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page: React.FC<ParamsType> = ({ params }) => {
	const dispatch = useDispatch();
	const { products, status, error } = useSelector(
		(state: RootState) => state.filterByCategory
	);

	useEffect(() => {
		dispatch(filterByCategories(params.id));
	}, [dispatch, params.id]);

	if (status === 'loading') {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='text-lg font-semibold'>Loading...</div>
			</div>
		);
	}

	if (status === 'failed') {
		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='text-lg font-semibold text-red-500'>Error: {error}</div>
			</div>
		);
	}

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>
				Products in Category:{' '}
				{params.id.startsWith('men')
					? "Men's clothing"
					: params.id.startsWith('wom')
					? "Women's clothing"
					: params.id}
			</h1>
			{products.length === 0 ? (
				<div className='text-lg font-semibold text-gray-500'>
					No products found.
				</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{products.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default Page;
