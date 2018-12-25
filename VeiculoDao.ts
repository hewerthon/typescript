import { DaoInterface } from "./DaoInterface"
import Veiculo from "./Veiculo"

export class VeiculoDao implements DaoInterface{
    nomeTabela: string = 'tb_veiculo'

    inserir(object: Veiculo): boolean{
        console.log('logica de insert')
        return true
    }
    atualizar(objet: Veiculo): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Veiculo{
        console.log('logica de remover')
        return new Veiculo()
    }
    selecionar(id: number): Veiculo{
        console.log('logica de selecionar')
        return  new Veiculo()
    }
    selecionarTodos(): [any]{
        console.log('logica de getAll')
        return [new Veiculo()]
    }
}