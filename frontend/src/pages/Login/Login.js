import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getUser } from '../../actions/users';
import { useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import Copyright from '../../components/Copyright/Copyright';
import NavBar from '../../components/NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  login: {
    padding: '0 2em',
  }
}));

export default function SignIn() {

  const classes = useStyles();
  const dispatch = useDispatch();
  let userObject;

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const clear = () => {
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';

    setUsername('');
    setPassword('');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("username = ", username);
    console.log("password = ", password);
    const a = dispatch(getUser(username));

    await a.then(res => {
      userObject = res;

      // case if username doesn't exist in system
      if (userObject === null || username.length === 0 || password.length === 0) {
        alert("Invalid login details!");
        return;
      }

      // case if password is wrong but username exists
      if (password !== userObject['password']) {
        alert("Invalid password!");
      }
      sessionStorage.setItem('loggedInUser', JSON.stringify(res));
      window.location.href = '/';
    });
    clear();
  }

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} className={classes.login}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
      </Typography>
            <form className={classes.form} action='/break'>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={e => setUsername(e.target.value)}
                id="name"
                label="Name"
                name="name"
                autoComplete="off"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={e => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Log In
        </Button>
              <Grid container>
                <Grid item>
                  <Typography variant="body1">Don't have an account?</Typography>
                  <Link href='/signUp' variant="body2">
                    <Button variant="contained" color="default" id="signUp">
                      Sign Up
            </Button>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
          <br />
        </Paper>
      </Container>
    </>
  );
}