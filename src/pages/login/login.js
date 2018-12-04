import React from 'react'
import './login.css'
import request from 'axios'

import Cadastrar from './cadastrar'
import HeaderLogin from './header-login'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

// function Header(props) {
//     return (
//         <div>
//             <div className='login-header'></div>
//             <div className='login-content-form'>
//                 <img src={require('../../resources/persona.png')} className="login-avatar" />
//                 {props.children}
//             </div>
//         </div>
//     )
// }

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToDasheboard: false,
            email: 'talison@gmail.com',
            password: '123456'
        }
    }

    login() {
        let credentials = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(this.state)
        request.post('http://localhost:3100/api/Users/login', credentials).then(result=>{
            console.log(result)
            this.props.store.dispatch({type: 'LOGIN', user: result.data})
            this.setState({
                redirectToDasheboard: true
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {

        const cuser = this.props.store.getState().controllerUsuario

        if (cuser.visibilityFilter == 'CREATE_USER') {
            return (<Cadastrar store={this.props.store} />)
        }

        let { from } = { from: { pathname: '/dasheboard' } }
        if (this.state.redirectToDasheboard) {
            return (<Redirect to={from} />)
        }

        return (
            <HeaderLogin heightHeader={{ height: '30vh' }}>
                <div className="login-form">
                    <TextField fullWidth
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        placeholder="Email" />
                    <TextField fullWidth
                        value={this.state.password}
                        type='password'
                        onChange={this.handleChange('password')}
                        placeholder="Senha" />
                    <div className="login-buttons">
                        <Button variant="contained" color="secondary" fullWidth onClick={() => this.login()}>Entrar</Button>
                        <Button fullWidth onClick={() => this.props.store.dispatch({ type: 'CREATE_USER' })}>Cadastrar</Button>
                    </div>
                </div>
            </HeaderLogin>
        )
    }
}

export default Login