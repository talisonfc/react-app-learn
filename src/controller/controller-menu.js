function controllerMenu(state = { menu: false }, action) {
    switch (action.type) {
        case 'OPEN_MENU': {
            console.log(action)
            return { menu: true }
        }
        case 'CLOSE_MENU': {
            return { menu: false }
        }
        default: {
            return state
        }
    }
}

export default controllerMenu