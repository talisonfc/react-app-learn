import ItemEstoque from '../model/item-estoque'
import Produto from '../model/produto'
import axios from 'axios'

class Estoque{
    constructor(){
        this.itens = new Array()
        this.init()
    }

    init(){
        // axios.get("http://localhost:3100/api/itemestoque").then(result=>{
        //     console.log(result)
        //     result.data.forEach(item => {
        //         this.itens.push(item)
        //     });
        // })
        // let item1 = new ItemEstoque(new Produto('Ovo'), 'Ovo de granja',10.00)
        // let item2 = new ItemEstoque(new Produto('Manteiga'), 'Manteiga Jucurutu',15.00)
        // let item3 = new ItemEstoque(new Produto('Oleo'), 'Oleo de oliva',25.00)
    }

    getItens(){
        return this.itens
    }

    addItem(itemEstoque){
        this.itens.push(itemEstoque)
    }

    removeItemByIndex(index){
        this.itens.splice(index,1)
    }
}

export default Estoque