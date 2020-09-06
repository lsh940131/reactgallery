import React, { useContext, useState } from 'react';
import RootContext from '../../Context/RootContext';

import { withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/lsh940131?tab=repositories">
				Sangheon Lee
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignIn = ({ history }) => {
	const { saveSignAction } = useContext(RootContext);
	
	const classes = useStyles();
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
		
	const handleSignIn = async () => {
		localStorage.clear();
		
		try {
			// Sign in
			const user = await Auth.signIn(username, password);
			
			// Save signed user info in localStorage
			localStorage.setItem('keyPrefix', user.keyPrefix);
			localStorage.setItem('userName', user.username);
			
			localStorage.setItem(
				'idToken',
				localStorage.getItem(`${user.keyPrefix}.${user.username}.idToken`),
			);
			localStorage.setItem(
				'accessToken',
				localStorage.getItem(`${user.keyPrefix}.${user.username}.accessToken`),
			);
			
			await saveSignAction({username: user.username, action: 'Sign in'});
			
			document.location.href = '/';
		}
		catch (error) {
			alert(error.message);
			console.log(error);
		}
	};
	
	const goToSignUp = () => {
		history.push('/signup');
	}
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="email"
            autoFocus
			onChange={(e) => {
				setUsername(e.target.value);
			}}
			onKeyDown={(e) => {
				if (e.keyCode === 13) {
					handleSignIn();
				}
			}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
			onChange={(e) => {
				setPassword(e.target.value);
			}}
			onKeyDown={(e) => {
				if (e.keyCode === 13) {
					handleSignIn();
				}
			}}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
			onClick={handleSignIn}
			className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button color="primary" component="span" onClick={goToSignUp}> Sign Up </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(SignIn);