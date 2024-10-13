import { ProducrMiniDetail } from '@/types/productDetail';
export interface Product {
	category: string;
	description: string;
	title: string;
	id: number;
	image: string;
	price: number;
	quantity: number;
	rating: ProducrMiniDetail;
}
export interface ProductState {
	products: Product[];
	loading: boolean;
	error: string | null;
}

export interface ProductType {
	product: Product;
	handleAddToCart: (product: Product) => void;
}
