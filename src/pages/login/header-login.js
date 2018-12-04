import React from 'react'
import './login.css'

class HeaderLogin extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div style={this.props.heightHeader} className='login-header'></div>
                <div className='login-content-form'>
                    <img src={require('../../resources/persona.png')} className="login-avatar" />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default HeaderLogin