import { aboutMainImage } from '@/constants/links';
import React from 'react';

export default function AboutPage() {
	return (
		<div className=' py-12'>
			<section className='container mx-auto p-6  rounded-lg shadow-md'>
				<div className='flex flex-col lg:flex-row items-center'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src={aboutMainImage}
							alt='Our Company'
							className='w-full h-auto rounded-lg shadow-lg'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-12'>
						<h1 className='text-4xl font-bold mb-4 '>
							Welcome to Online Store
						</h1>
						<p className='text-gray-400 mb-4'>
							At Online Store, we offer a unique selection of premium products
							across a wide range of categories, from fashion to electronics.
							Our store is designed with one goal in mind — to provide quality
							products that meet your needs.
						</p>
						<p className='text-gray-600'>
							Our vision is to lead in customer satisfaction through innovative
							products and exceptional service.
						</p>
					</div>
				</div>
			</section>
			<section className='my-12 bg-slate-900 text-white py-12'>
				<div className='container mx-auto'>
					<h2 className='text-3xl font-bold mb-6 text-center'>
						Our Core Values
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center'>
							<h3 className='text-xl font-semibold mb-2'>Quality First</h3>
							<p>
								We ensure that every product is carefully selected for the best
								quality.
							</p>
						</div>
						<div className='text-center'>
							<h3 className='text-xl font-semibold mb-2'>Innovation</h3>
							<p>
								We stay ahead of trends to bring you the most innovative
								products available.
							</p>
						</div>
						<div className='text-center'>
							<h3 className='text-xl font-semibold mb-2'>Customer Focus</h3>
							<p>Our customers are at the heart of everything we do.</p>
						</div>
					</div>
				</div>
			</section>{' '}
		</div>
	);
}
