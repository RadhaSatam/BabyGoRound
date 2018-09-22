import React, { Component } from 'react';

import LoginForm from '../Pages/Forms/LoginForm'

class Login extends Component {
    constructor(props){
      super(props);

      this._submitLogin = this._submitLogin.bind(this)
    }

    _submitLogIn(values) {
        console.log('values')
    }
    
    render() {
        return (
            <LoginForm onSubmit={this._submitLogin} />
        )
    }
}

export default Login;