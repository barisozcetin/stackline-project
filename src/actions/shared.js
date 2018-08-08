import { getSales } from './sales';
import { hideLoading } from './loading';
import { getInitialData } from './../utils/API';

export const handleInitialData = () => (dispatch) => {
	return getInitialData().then(({ sales }) => {
		console.log(sales);

		dispatch(getSales(sales));
		dispatch(hideLoading());
	});
};
