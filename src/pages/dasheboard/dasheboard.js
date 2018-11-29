import React from 'react'
import './dasheboard.css'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

import Menu from '../../menu'
import Estoque from '../../repository/estoque'
import ListOfItens from './list-of-itens'
import CreateItem from './create-item'
import EditItem from './edit-item'

import axios from 'axios'

class Dasheboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToLogin: false,
            menu: false,
            view: 'list',
            itemID: ''
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

    createItem() {
        this.setState({
            view: 'create'
        })
    }

    editItem(id){
        this.setState({view: 'edit', itemID: id})
    }

    onList() {
        this.setState({
            view: 'list'
        })
    }

    render() {
        let content;
        switch(this.state.view){
            case 'list':{
                content = <ListOfItens onEditItem={(id)=>this.editItem(id)} />
                break
            }
            case 'create':{
                content = <CreateItem onClose={() => this.onList()} estoque={this.state.estoque}/>
                break
            }
            case 'edit':{
                content = <EditItem onClose={() => this.onList()} itemID={this.state.itemID}/>
            }
            
        }

        return (
            <div className='root'>
                <Menu open={this.state.menu} onClose={() => this.closeMenu()} />
                <div>
                    <AppBar>
                        <Toolbar>
                            <IconButton color='inherit' className='menuButton' onClick={() => this.openMenu()}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6' color='inherit' className='grow'>Produtos</Typography>
                            <Button color='inherit' onClick={() => this.createItem()}>Novo</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}

export default Dasheboard