'use client';

import { Product } from '@/interfaces/products';
import { fetchProducts } from '@/store/slice/productSlice';
import { addToCard } from '@/store/slice/card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store/store';
import ProductComponent from '@/components/Product';
import Loading from '@/components/Loading';

const Page: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { products, loading, error } = useSelector(
		(state: any) => state.products
	);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const handleAddToCart = (product: Product) => {
		dispatch(addToCard(product));
	};

	return (
		<div className='container mx-auto p-4'>
			{loading && <Loading />}
			{error && <p className='text-red-500'>{error}</p>}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{products.map((product: Product) => (
					<ProductComponent
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	);
};

export default Page;
