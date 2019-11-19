import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

import './App.css';

class Perfil extends Component {
   
    render() {
        var user = this.props.location.state.user;    
        return (
            <div className='App'>
                <h1 className='App-title'>Página de Perfil de {user}</h1>
                <p className='App-intro'>
                    Exemplo de Página Perfil :)
                </p>
                <Button variant="outlied" color="primary" type="button" component={Link} to="/">Voltar para login</Button>
            </div>
        );
    }
}
export default Perfil;