import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export class Chart extends Component {
	static propTypes = {};

	render() {
		const { data } = this.props;
		return (
			<div className="bg-white chart__container">
				<h3>Retail Sales</h3>
				<ResponsiveContainer width="95%" height={400}>
					<LineChart width={750} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
						{/* <CartesianGrid strokeDasharray="3 3" /> */}
						<XAxis dataKey="weekEnding" />
						{/* <YAxis /> */}
						<Tooltip />
						{/* <Legend /> */}
						<Line type="monotone" dataKey="retailSales" stroke="lightblue" strokeWidth={3} />
						<Line type="monotone" dataKey="wholesaleSales" stroke="purple" strokeWidth={3} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

export default Chart;
