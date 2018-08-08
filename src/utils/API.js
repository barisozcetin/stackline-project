import { _getSales } from './_data';

export function getInitialData() {
	return _getSales().then((sales) => {
		return { sales };
	});
}
