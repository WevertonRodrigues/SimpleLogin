import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button, Typography, Container, makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(3, 0, 2),
    },
    mainP:{
        marginTop: theme.spacing(10),
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


}));

function myHook(Component) {
    return function WrappedComponent(props) {
      const classes = useStyles();
      return <Component {...props} class={classes} />;
    }
  }

class Perfil extends React.Component {

    render() {
        const user = this.props.location.state.user;
        const classes = this.props.class;
        return (
            <Container className={classes.mainP} component="main" maxWidth="lg">
                <Paper className={classes.paper}>
                    <Typography align="center">Welcome, {user}</Typography>
                    <Container className={classes.button} maxWidth='xs'>
                        <Button variant="contained" fullWidth="true" color="primary" type="button" component={Link} to="/">Back to Log In</Button>
                    </Container>
                </Paper>
            </Container>
        );
    }
}

Perfil = myHook(Perfil);

export default Perfil;