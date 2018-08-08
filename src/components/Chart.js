import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export class Chart extends Component {
	static propTypes = { data: PropTypes.array };

	render() {
		const { data } = this.props;
		return (
			<div className="bg-white chart__container">
				<h3>Retail Sales</h3>
				<ResponsiveContainer width="95%" height={400}>
					<LineChart width={750} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
						<XAxis dataKey="weekEnding" />
						<Tooltip />

						<Line type="monotone" dataKey="retailSales" stroke="lightblue" strokeWidth={3} />
						<Line type="monotone" dataKey="wholesaleSales" stroke="purple" strokeWidth={3} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

export default Chart;
