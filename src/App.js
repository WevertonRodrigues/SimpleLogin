import React, { Component } from 'react';
import { Button, TextField, makeStyles, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './App.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const classes = useStyles();

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
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">          
            <h1> LOGIN </h1>
            <TextField
              label="Username"
              margin="normal"
              variant="outlined"
              type="text"
              onChange={this.handleUser}
              value={this.state.user}
              className={classes.textField}
              margin="normal"
              helperText="Required"
            />
            <br />
            <TextField
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              onChange={this.handlePass}
              value={this.state.pass}
              className={classes.textField}
              margin="normal"
              helperText="Required"
            />
            <br />
            <Button variant="contained" color="primary" type="button"
              component={Link} to={{ pathname: '/perfil', state: { user: this.state.user } }} > Login</Button>
        </form>
      </div>
    );
  }
}

export default App;
