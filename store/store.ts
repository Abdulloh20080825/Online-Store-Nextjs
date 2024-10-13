import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categorySlice';
import productsReducer from './slice/productSlice';
import productReducer from './slice/getOneProduct';
import filterByCategoryReducer from './slice/filterByCategory';
import cardReducer from './slice/card';

const store = configureStore({
	reducer: {
		categories: categoryReducer,
		products: productsReducer,
		card: cardReducer,
		product: productReducer,
		filterByCategory: filterByCategoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
