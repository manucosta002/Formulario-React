import React, { Component, Fragment } from 'react';
import Formulario from './components/formulario/Formulario';
import './App.css'; 
import '@fontsource/roboto/300.css';

import {Container, Typography} from "@mui/material"

class App extends Component {
    render() {
        return ( 
            <Container component="article" maxWidth="sm">
                <Typography variant = "h3"align="center" component= "h2"> Formúlario de Cadastro </Typography>
                <Formulario aoEnviar ={aoEnviar} validarCpf={validarCpf} />
            </Container>
        );
    }
}

function aoEnviar(dados){
    console.log(dados);
}

function validarCpf(cpf){
    if(cpf.lenght != 11){
        return {valido:true, texto:"CPF deve ter 11 digitos."}
    }else{
        return{valido:true, texto:""}
    }
}

export default App;