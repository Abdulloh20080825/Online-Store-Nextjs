import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const response = await axios.get(
			'https://fakestoreapi.com/products/categories'
		);
		return response.data;
	}
);

const categorySlice = createSlice({
	name: 'categories',
	initialState: {
		items: [] as string[],
		status: 'idle',
		error: null as string | null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to fetch categories';
			});
	},
});

export default categorySlice.reducer;
