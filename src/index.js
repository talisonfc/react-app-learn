import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Main from './main'

import controllerUsuario from './controller/controller-usuario'
import controllerProduto from './controller/controller-produto'
import controllerMenu from './controller/controller-menu'

import { createStore, combineReducers } from 'redux'
const reducers = combineReducers({
    controllerMenu,
    controllerProduto,
    controllerUsuario
})

const store = createStore(reducers)

const render = () => {
    ReactDOM.render(<Main store={store} />, document.getElementById('root'))
}

store.subscribe(() => {
    console.log(store.getState())
    render()
})

render()