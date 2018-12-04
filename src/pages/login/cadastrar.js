
import React from 'react'
import request from 'axios'

import HeaderLogin from './header-login'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

class Cadastrar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            tipo: ''
        }
    }

    save() {
        let user = {
            name: this.state.nome,
            email: this.state.email,
            password: this.state.senha
        }
        request.post(`http://localhost:3100/api/Users`, user).then(result => {
            console.log(result)
            this.props.store.dispatch({type: 'SHOW_LOGIN'})
        }).catch(err => {
            console.error(err)
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleTipo = event => {
        this.setState({ tipo: event.target.value });
    };

    handleReset() {
        let keys = Object.keys(this.state)
        keys.forEach(key => {
            this.setState({
                [key]: ''
            })
        })
    }

    exit() {
        this.props.store.dispatch({type: 'SHOW_LOGIN'})
    }

    render() {
        return (
            <HeaderLogin heightHeader={{ height: '15vh' }}>
                <div style={{
                    width: '50%',
                    marginLeft: '25%'
                }}>
                    <TextField
                        id="standard-name"
                        label="Name"
                        className='textField'
                        value={this.state.nome}
                        onChange={this.handleChange('nome')}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="standard-name"
                        label="Email"
                        className='textField'
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="standard-name"
                        label="Senha"
                        type="password"
                        className='textField'
                        value={this.state.senha}
                        onChange={this.handleChange('senha')}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <RadioGroup
                        aria-label="Tipo de usuário"
                        name="tipo"
                        value={this.state.tipo}
                        onChange={this.handleTipo}
                    >
                        <FormControlLabel value="produtor" control={<Radio />} label="Produtor" />
                        <FormControlLabel value="consumidor" control={<Radio />} label="Consumidor" />
                    </RadioGroup>
                    <div>
                        <Button color="inherit" onClick={() => this.exit()}>Cancelar</Button>
                        <Button color="primary" onClick={() => this.handleReset()}>Limpar</Button>
                        <Button color="inherit" onClick={() => this.save()}>Salvar</Button>
                    </div>
                </div>
            </HeaderLogin>
        )
    }
}

export default Cadastrar