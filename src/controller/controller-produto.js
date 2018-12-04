import axios from 'axios'

const modelo = {
    itens: []
}

function controllerProduto(state = { visibilityFilter: 'list', itemID: -1, itens: [] }, action) {
    switch (action.type) {
        case 'ADD_PRODUTO': {
            return { visibilityFilter: 'create' }
        }
        case 'EDIT_PRODUTO': {
            return { visibilityFilter: 'edit', itemID: action.itemID }
        }
        case 'REMOVE_PRODUTO': {
            return { visibilityFilter: 'list' }
        }
        case 'LIST_PRODUTOS': {
            return { visibilityFilter: 'list', itens: []}
        }
        default: {
            return state
        }
    }
}

export default controllerProduto