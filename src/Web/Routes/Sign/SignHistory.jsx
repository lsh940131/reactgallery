import React, { useState, useEffect, useContext } from 'react';
import RootContext from '../../Context/RootContext';
import { Route , withRouter} from 'react-router-dom';

import SignHistoryGrid from '../../Components/SignHistoryGrid';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const SignHistory = ({ history }) => {
	const classes = useStyles();
	const { getAllUsersSignHistory } = useContext(RootContext);
	const [historyData, setHistoryData] = useState([{Username: undefined, Action: undefined, Timestamp: undefined}]);
	
	useEffect(() => {
		async function fetchSignHistory(){
			const {data: response} = await getAllUsersSignHistory();
			setHistoryData(response);
		}
		fetchSignHistory();
	}, []);
	
	return (
	<>
		<div className={classes.root}>
		  <AppBar position="static">
			<Toolbar>
			  <Typography variant="h6" className={classes.title} style={{fontWeight: 'bold', fontSize: 20}}>
				Sign History
			  </Typography>
			</Toolbar>
		  </AppBar>
		</div>
		
		<SignHistoryGrid historyData={historyData}/>
	</>
	);
}

export default withRouter(SignHistory);