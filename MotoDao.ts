import { DaoInterface } from "./DaoInterface"
import Moto from "./Moto"

export class MotoDao implements DaoInterface{
    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean{
        console.log('logica de insert')
        return true
    }
    atualizar(objet: Moto): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Moto{
        console.log('logica de remover')
        return new Moto()
    }
    selecionar(id: number): Moto{
        console.log('logica de selecionar')
        return  new Moto()
    }
    selecionarTodos(): [any]{
        console.log('logica de getAll')
        return [new Moto()]
    }
}