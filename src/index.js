import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import Amplify from 'aws-amplify';
import cognito from './AWS/cognito';

Amplify.configure({
  identityPoolRegion: cognito.RESION,
  userPoolId: cognito.USER_POOL_ID,
  userPoolWebClientId: cognito.APP_CLIENT_ID,
});

ReactDOM.render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>,
	document.getElementById('root')
);