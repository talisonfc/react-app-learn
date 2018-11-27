import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import './dasheboard.css'

import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'

import Menu from '../../menu'
import Estoque from '../../repository/estoque'

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}



class Dasheboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToLogin: false,
            menu: false,
            estoque: new Estoque()
        }
    }

    logout() {
        this.setState({
            redirectToLogin: true
        })
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

    removeItem(index){
        this.state.estoque.removeItemByIndex(index)
    }

    render() {
        const { classes } = this.props

        const listOfItens = (
            <List>
                {this.state.estoque.itens.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.produto.nome} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={()=>{this.removeItem(index)}}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        )

        const content = (
            <div className="content">
                {listOfItens}
            </div>
        )

        return (
            <div className={classes.root}>
                <Menu open={this.state.menu} onClose={() => this.closeMenu()} />
                <div>
                    <AppBar>
                        <Toolbar>
                            <IconButton color='inherit' className={classes.menuButton} onClick={() => this.openMenu()}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6' color='inherit' className={classes.grow}>Produtos</Typography>
                            <Button color='inherit'>Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                {content}
            </div>
        )
    }
}

Dasheboard.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Dasheboard)