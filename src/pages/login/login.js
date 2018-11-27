import React from 'react'
import './login.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {

    state = {redirectToDasheboard: false}
    
    login(){
        this.setState({redirectToDasheboard: true})
    }

    render() {
        let {from} = {from: {pathname: '/dasheboard'}}
        if(this.state.redirectToDasheboard){
            return (<Redirect to={from}/>)
        }

        return (
            <div>
                <div className='login-header'></div>
                <div className='login-content-form'>
                    <img src={require('../../resources/persona.png')} className="login-avatar"/>
                    <div className="login-form">
                        <TextField fullWidth
                            placeholder="Email" />
                        <TextField fullWidth
                            placeholder="Senha" />
                        <div className="login-buttons">
                            <Button variant="contained" color="secondary" fullWidth onClick={()=>this.login()}>Entrar</Button>
                            <Button fullWidth>Cadastrar</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login