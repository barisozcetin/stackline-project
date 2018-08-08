import React from 'react';

const Arrow = ({ reverse }) => {
	if (reverse) {
		return <span className="arrow">↑</span>;
	}
	return <span className="arrow">↓</span>;
};

export default Arrow;
