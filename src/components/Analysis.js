import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Arrow from './Arrow';

export class Analysis extends Component {
	static propTypes = {
		data: PropTypes.array
	};
	state = {
		sortBy: 'week',
		sortReverse: false,

		options: [
			{
				name: 'week',
				text: 'WEEK ENDING'
			},
			{
				name: 'retail',
				text: 'RETAIL SALES'
			},
			{
				name: 'wholesale',
				text: 'WHOLESALES'
			},
			{
				name: 'units',
				text: 'UNITS SOLD'
			},
			{
				name: 'margin',
				text: 'RETAILER MARGIN'
			}
		]
	};

	changeSortMethod = (sortBy) => {
		if (!sortBy) return false;
		if (this.state.sortBy === sortBy) {
			this.setState((prevState) => ({ sortReverse: !prevState.sortReverse }));
		}

		this.setState({ sortBy });
	};

	getSortedData = () => {
		let sorted = [ ...this.props.data ];
		switch (this.state.sortBy) {
			case 'week':
				sorted.sort((a, b) => b.weekEnding > a.weekEnding);
				break;
			case 'retail':
				sorted.sort((a, b) => b.retailSales - a.retailSales);
				break;
			case 'wholesale':
				sorted.sort((a, b) => b.wholesaleSales - a.wholesaleSales);
				break;
			case 'units':
				sorted.sort((a, b) => b.unitsSold - a.unitsSold);
				break;
			case 'margin':
				sorted.sort((a, b) => b.retailerMargin - a.retailerMargin);
				break;
			default:
				break;
		}
		if (this.state.sortReverse) sorted.reverse();
		return sorted;
	};

	render() {
		const data = this.getSortedData();
		const titles = this.state.options;
		return (
			<div className="bg-white">
				<table>
					<thead>
						<tr>
							{titles &&
								titles.map((item) => (
									<th
										key={item.name}
										name={item.name}
										id={item.name}
										onClick={(e) => this.changeSortMethod(item.name)}
										style={{ fontWeight: this.state.sortBy === item.name ? 'bold' : '500' }}
									>
										<i />
										{this.state.sortBy === item.name && <Arrow reverse={this.state.sortReverse} />} {item.text}
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map((line, i) => (
								<tr key={i}>
									<td>{line.weekEnding}</td>
									<td>${(line.retailSales / 100).toFixed(2)}</td>
									<td>${(line.wholesaleSales / 100).toFixed(2)}</td>
									<td>{line.unitsSold}</td>
									<td>${(line.retailerMargin / 100).toFixed(2)}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Analysis;
