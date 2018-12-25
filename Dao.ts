import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: T): boolean{
        console.log('logica de insert')
        return true
    }
    atualizar(objet: T): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): T{
        console.log('logica de remover')
        return Object()
    }
    selecionar(id: number): T{
        console.log('logica de selecionar')
        return  Object()
    }
    selecionarTodos(): [T]{
        console.log('logica de getAll')
        return [Object()]
    }
}