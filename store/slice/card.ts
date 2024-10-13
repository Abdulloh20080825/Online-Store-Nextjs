import { Product } from '@/interfaces/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CardState = Product[];
const initialState: CardState = [];

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addToCard: (state, action: PayloadAction<Product>) => {
			const existingProduct = state.find(
				(item: { id: number }) => item.id === action.payload.id
			);
			if (existingProduct) {
				existingProduct.quantity += 1;
			} else {
				state.push({ ...action.payload, quantity: 1 });
			}
		},
		decrementQuantity: (state, action: PayloadAction<number>) => {
			const product = state.find(
				(item: { id: number }) => item.id === action.payload
			);
			if (product) {
				if (product.quantity > 1) {
					product.quantity -= 1;
				} else {
					return state.filter((x) => x.id !== action.payload);
				}
			}
		},

		incrementQuantity: (state, action: PayloadAction<number>) => {
			const product = state.find(
				(item: { id: number }) => item.id === action.payload
			);
			if (product) {
				product.quantity += 1;
			}
		},

		removeAll: () => {
			return [];
		},
	},
});

export const { addToCard, decrementQuantity, incrementQuantity, removeAll } =
	cardSlice.actions;
export default cardSlice.reducer;
