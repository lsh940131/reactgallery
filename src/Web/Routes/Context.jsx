import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import RootContext from '../Context/RootContext';
import Main from './Main/Main';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
import SignHistory from './Sign/SignHistory';

import { Auth } from 'aws-amplify';
import decode from 'jwt-decode';

import { signUp, saveSignAction, getAllUsersSignHistory } from 'API/Sign';
import { uploadImage, getImagesInfo, getImage } from 'API/Gallery';

const Context = () => {
	
	const handleSignOut = async () => {
		try {
			await Auth.signOut();
			
			// Request for saving the signed user log
			await saveSignAction({username: localStorage.getItem('userName'), action: 'Sign out'});
			
			localStorage.clear();
			alert('로그아웃 되었습니다.');
			document.location.href = '/';
		} catch (error) {
			console.log(error);
		}
	};
  
	const state = {
		signUp,
		saveSignAction,
		getAllUsersSignHistory,
		handleSignOut,
		uploadImage,
		getImagesInfo,
		getImage
	};
	
	return (
		<RootContext.Provider value={state}>
			<Switch>
				<AuthRoute exact path="/" component={Main} />
				<LoginCheckRoute path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signhistory" component={SignHistory} />
				<Route component={NotFound} />
			</Switch>
		</RootContext.Provider>
	);
};

/**
 * localStorage userName값 여부에 따른 로그인 여부 체크하여  로그인 페이지로 리다이렉트 처리
 */
export const LoginCheckRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('userName') ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

/**
 *   jwtToken 유효성 Check Function
 */
const checkAuth = () => {
	const idToken = localStorage.getItem(`idToken`);
	const accessToken = localStorage.getItem(`accessToken`);

	if (!idToken || !accessToken) {
		return false;
	}

	try {
		// { exp: 12903871920 } jwt 토큰 만료시간 decode하여 만료 되었으면 로그아웃 처리 ( localStorage 초기화 )
		const { exp } = decode(idToken);

		if (exp < new Date().getTime() / 1000) {
			alert('로그아웃 되었습니다.');
			localStorage.clear();
			return false;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
	return true;
};

/**
 * jwt토큰 만료 && jwt토큰이 없을 시 로그인 페이지로 리다이렉트
 */
export const AuthRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => checkAuth() ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/signin', state: { from: props.location }}} />
				)
			}
		/>
	);
};

function NotFound(){
	return (<> Not Found </>);
}

export default withRouter(Context);