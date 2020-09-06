import React from 'react';
import { withRouter } from 'react-router-dom';

import MenuAppBar from '../../Components/MenuAppBar';
import Gallery from '../../Components/Gallery';
	
const Main = ({ history }) => {
	
	return (
		<>
			<MenuAppBar />
			<div style={{marginTop: 10}}/>
			<Gallery />
		</>
	);
}

export default withRouter(Main);