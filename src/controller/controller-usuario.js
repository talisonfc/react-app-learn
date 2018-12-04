
function controllerUsuario(state = { visibilityFilter: 'SHOW_LOGIN', user: {} }, action) {
    switch (action.type) {
        case 'SHOW_LOGIN': {
            return { visibilityFilter: 'SHOW_LOGIN', user: {} }
        }
        case 'CREATE_USER': {
            return { visibilityFilter: 'CREATE_USER', user: {} }
        }
        case 'LOGIN': {
            return { visibilityFilter: 'SHOW_LOGIN', user: action.user}
        }
        default: {
            return state
        }
    }
}

export default controllerUsuario