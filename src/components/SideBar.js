import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ sales }) => {
	return (
		<div className="content__side bg-white">
			<div className="img__container">
				<img className="item__image" src={sales.image} alt="" />
				<h2 className="item__title">{sales.title}</h2>
				<p className="item__desc">{sales.subtitle}</p>
			</div>
			<ul className="tags">
				{sales.tags &&
					sales.tags.map((tag, index) => (
						<li className="tag" key={index}>
							{tag}
						</li>
					))}
			</ul>
			<ul className="menu">
				<li>
					<a className="link" href="">
						<i className="fas fa-home" /> OVERVIEW
					</a>
				</li>
				<li>
					<a className="link active" href="">
						<i className="far fa-chart-bar" /> SALES
					</a>
				</li>
			</ul>
		</div>
	);
};

SideBar.propTypes = {
	sales: PropTypes.object
};

export default SideBar;
