import React from 'react'
import './dasheboard.css'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

import Menu from '../../menu'
import ListOfItens from './list-of-itens'
import CreateItem from './create-item'
import EditItem from './edit-item'

class Dasheboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirectToLogin: false
        }
    }

    logout() {
        this.setState({
            redirectToLogin: true
        })
    }

    render() {
        let content;
        switch(this.props.store.getState().controllerProduto.visibilityFilter){
            case 'list':{
                content = <ListOfItens onEditItem={(id)=>this.props.store.dispatch({type: 'EDIT_PRODUTO', itemID: id})} store={this.props.store} />
                break
            }
            case 'create':{
                content = <CreateItem store={this.props.store}/>
                break
            }
            case 'edit':{
                content = <EditItem store={this.props.store} itemID={this.props.store.getState().controllerProduto.itemID}/>
            }
            
        }

        return (
            <div className='root'>
                <Menu open={this.props.store.getState().controllerMenu.menu} onClose={() => this.props.store.dispatch({type: 'CLOSE_MENU'})} />
                <div>
                    <AppBar>
                        <Toolbar>
                            <IconButton color='inherit' className='menuButton' onClick={() => this.props.store.dispatch({type: 'OPEN_MENU'})}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6' color='inherit' className='grow'>Produtos</Typography>
                            <Button color='inherit' onClick={()=>this.props.store.dispatch({type: 'ADD_PRODUTO'})}>Novo</Button>
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