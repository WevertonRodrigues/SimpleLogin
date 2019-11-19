import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  main: {
    backgroundColor: theme.palette.common.white,
  },
}));

function myHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} class={classes} />;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  handleUser = (event) => {
    this.setState({ user: event.target.value })
  }

  handlePass = (event) => {
    this.setState({ pass: event.target.value })
  }

  render() {
    const classes = this.props.class;
    return (
      <Container className="main" component="main" maxWidth="md">
        <Paper >
          <Container maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log In
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoFocus
                  onChange={this.handleUser}
                  value={this.state.user}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  onChange={this.handlePass}
                  value={this.state.pass}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  component={Link} to={{ pathname: '/perfil', state: { user: this.state.user } }}
                >
                  Log In
            </Button>
              </form>
            </div>
          </Container>
        </Paper>
      </Container>
    );
  }
}

App = myHook(App);

export default App;