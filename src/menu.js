import React from 'react'
import PropTypes from 'prop-types'

import './menu.css'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import Divider from '@material-ui/core/Divider'


import { Redirect } from 'react-router-dom'

import Login from './pages/login/login'
import Dasheboard from './pages/dasheboard/dasheboard'

class Menu extends React.Component {

    pages = [
        {
            name: 'Login',
            pathname: '/'
        },
        {
            name: 'Produtos',
            pathname: '/dasheboard'
        }
    ]

    constructor(props) {
        super(props)
        this.state = {
            close: false,
            page: ''
        }
    }

    render() {

        const sideList = (
            <div className='list'>
                <List>
                    {this.pages.map((page, index) => (
                        <ListItem button key={page.name}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={page.name}
                                onClick={() => this.props.onClose()} />
                        </ListItem>
                    ))}
                </List>
            </div>
        )

        const menu = (
            <div>
                <Drawer open={this.props.open} onClose={() => this.props.onClose()}>
                    <div
                        tabIndex={0}
                        role='button'>
                        {sideList}
                    </div>
                </Drawer>
            </div>
        )

        // if (this.state.page !== '') {
        //     this.pages.forEach(page => {
        //         if (page.name === this.state.page) {
        //             let from = { pathname: page.pathname }
        //             console.log(from)
        //             return (<Redirect to={from} />)
        //         }
        //     })
        // }
        // else{
        //     return menu
        // }
        return menu
    }
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }
    }

    openMenu() {
        this.setState({
            menu: !this.state.menu
        })
    }

    closeMenu() {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div>
                <Menu open={this.state.menu} onClose={() => this.closeMenu()} />
                <Button onClick={() => this.openMenu()}>Open</Button>
            </div>

        )
    }
}

export default Menu