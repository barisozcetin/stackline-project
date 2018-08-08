export const GET_SALES = 'GET_SALES';

export const getSales = (sales) => {
	return {
		type: GET_SALES,
		sales
	};
};
