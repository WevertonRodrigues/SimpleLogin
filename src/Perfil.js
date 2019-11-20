import React from 'react';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Link } from 'react-router-dom';
import { Paper, Button, Typography, Container, makeStyles, Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(6, 0, 5),
    },
    main: {
        marginTop: theme.spacing(10),
    },
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    perfil: {
        marginTop: theme.spacing(3),
        textAlign: 'left',
        fontFamily: 'fantasy',
    },
    font: {
        fontFamily: 'Calistoga',
        fontStyle: 'cursive'
    },
    bold: {
        marginLeft: theme.spacing(1),
        fontWeight: "bold",
        fontFamily: 'Calistoga',
        fontStyle: 'cursive'
    },
    rounded: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    }
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
            <Container className={classes.main} maxWidth="lg">
                <Paper className={classes.paper}>
                    <Avatar variant="rounded"
                        className={classes.rounded}
                    >
                        <AccountBoxOutlinedIcon />
                    </Avatar>
                        <Grid container  justify="center" alignItems="center">
                            <Typography variant="h5" className={classes.font} >Welcome, </Typography>
                            <Typography variant="h5" className={classes.bold}>{user}</Typography>
                        </Grid>
                    <Container className={classes.button} maxWidth='xs'>
                        <Button variant="contained" fullWidth color="primary" type="button" component={Link} to="/" color="secondary">
                            Back to Log In
                        </Button>
                    </Container>
                </Paper>
            </Container>
        );
    }
}

Perfil = myHook(Perfil);

export default Perfil;