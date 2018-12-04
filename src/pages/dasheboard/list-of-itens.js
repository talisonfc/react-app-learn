
import React, { Component } from 'react'
import axios from 'axios'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Receipt from '@material-ui/icons/Receipt'
import DeleteIcon from '@material-ui/icons/Delete'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'


class ListOfItens extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itens: [],
            token: this.props.store.getState().controllerUsuario.user.id
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3100/api/item-estoques?access_token=${this.state.token}`).then(result => {
            let temp = []
            result.data.forEach(item => {
                temp.push(item)
            });
            this.setState({ itens: temp })
        })
    }

    removeItem(i) {
        axios.delete(`http://localhost:3100/api/item-estoques/${this.state.itens[i].id}?access_token=${this.state.token}`).then(result => {
            this.state.itens.splice(i, 1)
            this.setState({ estoque: this.state.estoque })
        }).catch(err => {
            console.error(err)
        })
    }

    render() {
        const N = this.state.itens.length

        if (N == 0) {
            return (
                <div style={{
                    textAlign: 'center',
                    color: '#ccc'
                }}>
                    <Receipt style={{ fontSize: '12em', marginTop: '150px' }} />
                    <div>
                        <Button style={{
                            textTransform: 'inherit',
                            color: '#ccc'
                        }}>Estoque vazio, click no botão NOVO para adicionar produtos!</Button>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {/* <List>
                    {this.state.itens.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={item.produto.nome} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete" onClick={() => { this.removeItem(index) }}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List> */}
                {/* <Paper> */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Valor</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Minimo</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.itens.map((item, i) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.produto.nome}</TableCell>
                                <TableCell>{item.produto.descricao}</TableCell>
                                <TableCell>{item.produto.valor}</TableCell>
                                <TableCell>{item.qtn}</TableCell>
                                <TableCell>{item.min}</TableCell>
                                <TableCell style={{ textAlign: 'right' }}>
                                    <IconButton aria-label="Delete" onClick={() => { this.props.onEditItem(item.id) }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="Delete" onClick={() => { this.removeItem(i) }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* </Paper> */}
            </div>
        )
    }

}

export default ListOfItens