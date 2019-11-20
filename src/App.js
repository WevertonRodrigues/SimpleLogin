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
    margin: theme.spacing(6, 0, 5),
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
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
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
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Username"
                  name="user"
                  autoFocus
                  onChange={(event) => this.handleUserInput(event)}
                  value={this.state.user}
                  color="secondary"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Password"
                  name="pass"
                  type="password"
                  onChange={(event) => this.handleUserInput(event)}
                  value={this.state.pass}
                  color="secondary"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  component={Link} to={{ pathname: '/perfil', state: { user: this.state.user } }}
                  color="secondary"
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