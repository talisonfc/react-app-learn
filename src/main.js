import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/login'
import Dasheboard from './pages/dasheboard/dasheboard'

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/dasheboard' component={Dasheboard} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main