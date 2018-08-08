import { GET_SALES } from '../actions/sales';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_SALES:
			return { ...state, ...action.sales };

		default:
			return state;
	}
};
