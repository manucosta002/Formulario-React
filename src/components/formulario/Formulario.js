import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Formulario({aoEnviar, validarCpf}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [nendereco, setNendereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");

    const [erro, setErro] = useState({cpf:{valido:true, texto:""}})
    
    return ( 
    <form 
        onSubmit={(event)=> {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, email, cep, endereco, nendereco, bairro, cidade})  }}>

        <TextField
        value={nome}
        onChange={(event)=>{
            setNome(event.target.value); }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={sobrenome}
        onChange={(event)=>{                  
            setSobrenome(event.target.value); }}
        id="sobrenome"
        label="Sobrenome" 
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={cpf}
        onChange={(event)=>{                  
            setCpf(event.target.value);
        }}
        onBlur={(event)=>{
            const ehValido = validarCpf(cpf);
            setErro({cpf:ehValido})
        }}
        erro={!erro.cpf.valido}
        helperText={erro.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={email}
        onChange={(event)=>{                  
            setEmail(event.target.value); }}
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={cep}
        onChange={(event)=>{                  
            setCep(event.target.value); }}
        id="cep"
        label="Cep"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={endereco}
        onChange={(event)=>{                  
            setEndereco(event.target.value); }}
        id="endereco"
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={nendereco}
        onChange={(event)=>{                  
            setNendereco(event.target.value); }}
        id="n endereco"
        label="N° Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={bairro}
        onChange={(event)=>{                  
            setBairro(event.target.value); }}
        id="bairro"
        label="Bairro"
        variant="outlined"
        margin="normal"
        fullWidth
        />

        <TextField 
        value={cidade}
        onChange={(event)=>{                  
            setCidade(event.target.value); }}
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
        fullWidth 
        />

        <Button 
        onClick={() => { }}
        variant = "contained"
        color = "primary"
        size = "medium"
        fullWidth>
        Cadastrar
        </Button>

        </form>
    );
}

export default Formulario;