import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '@/interfaces/products';
export const fetchProductById = createAsyncThunk(
	'product/fetchById',
	async (id: number, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://fakestoreapi.com/products/${id}`
			);
			return response.data as Product;
		} catch (error: any) {
			return rejectWithValue(error.response.data || 'Failed to fetch product');
		}
	}
);

interface ProductState {
	product: Product | null;
	loading: boolean;
	error: string | null;
}

const initialState: ProductState = {
	product: null,
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		clearProduct: (state) => {
			state.product = null;
			state.loading = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProductById.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload;
			})
			.addCase(fetchProductById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;
