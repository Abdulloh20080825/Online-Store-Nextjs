import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const filterByCategories = createAsyncThunk(
	'filterByCategories/filterByCategories',
	async (id: string) => {
		const response = await axios.get(
			`https://fakestoreapi.com/products/category/${id}`
		);
		return response.data;
	}
);

const categorySlice = createSlice({
	name: 'filterByCategories',
	initialState: {
		products: [] as string[],
		status: 'idle',
		error: null as string | null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(filterByCategories.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(filterByCategories.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = action.payload;
			})
			.addCase(filterByCategories.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to fetch categories';
			});
	},
});

export default categorySlice.reducer;
