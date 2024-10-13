'use client';

import { RootState } from '@/store/store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { isActive } from '@/helpers/active';

const Header = () => {
	const products = useSelector((state: RootState) => state.card);
	const pathname = usePathname();
	return (
		<header className='h-[15vh] fixed top-0 w-full flex justify-between items-center px-10 shadow-md border-b border-gray-600 bg-black text-white z-50'>
			<h1 className='text-3xl font-bold tracking-widest'>Online Store</h1>
			<nav className='flex space-x-8'>
				<Link
					href='/'
					className={`text-lg font-medium hover:text-blue-500 transition-colors duration-300 ${isActive(
						pathname,
						'/'
					)}`}
				>
					Home
				</Link>
				<Link
					href='/about'
					className={`text-lg font-medium hover:text-blue-500 transition-colors duration-300 ${isActive(
						pathname,
						'/about'
					)}`}
				>
					About
				</Link>
				<Link
					href='/products'
					className={`text-lg font-medium hover:text-blue-500 transition-colors duration-300 ${isActive(
						pathname,
						'/products'
					)}`}
				>
					Products
				</Link>
				<Link
					href='/card'
					className={`text-lg font-medium hover:text-blue-500 transition-colors duration-300 ${isActive(
						pathname,
						'/card'
					)}`}
				>
					Cart ({products.length})
				</Link>
			</nav>
		</header>
	);
};

export default Header;
