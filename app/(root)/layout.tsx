'use client';

import React, { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-grow'>{children}</main>
			<footer className='h-[10vh] flex justify-center items-center shadow-md'>
				<p className='text-gray-400'>
					© 2024 Online Store. Maked by Abdulloh Qurbonov.
				</p>
			</footer>
		</div>
	);
};

export default Layout;
