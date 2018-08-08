import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './../actions/shared';
import Loading from './Loading';
import SideBar from './SideBar';
import Chart from './Chart';
import Analysis from './Analysis';
import NavBar from './NavBar';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		const { loading, sales } = this.props;
		return (
			<div className="App">
				{loading ? (
					<Loading />
				) : (
					<div className="container">
						<NavBar />
						<div className="content">
							<SideBar sales={sales} />
							<div className="content__main">
								<Chart data={sales.sales} />
								<Analysis data={sales.sales} />
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ loading, sales }) => ({ loading, sales });

export default connect(mapStateToProps)(App);
