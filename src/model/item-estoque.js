import Produto from './produto'

class ItemEstoque{
    constructor(produto, quantidade, minimo){
        this.produto = produto
        this.quantidate = quantidade
        this.minimo = minimo
    }
}

export default ItemEstoque