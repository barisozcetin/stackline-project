import { _getSales } from './_data';

export function getInitialData() {
	return _getSales().then((sales) => {
		// console.group('sales');
		// console.log(sales);
		// console.groupEnd();
		// console.group('topCustomers');
		// console.log(topCustomers);
		// console.groupEnd();
		console.log(sales);
		return { sales };
	});
}
