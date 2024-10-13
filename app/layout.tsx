'use client';

import Header from '@/components/Header';
import './globals.css';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider store={store}>
			<html lang='en'>
				<body>
					<div className='h-[15vh]'>
						<Header />
					</div>
					{children}
				</body>
			</html>
		</Provider>
	);
}
