import { DaoInterface } from "./DaoInterface"
import Pessoa from "./Pessoa"
import Carro from "./Carro";

export class PessoaDao implements DaoInterface{
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean{
        console.log('logica de insert')
        return true
    }
    atualizar(objet: Pessoa): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Pessoa{
        console.log('logica de remover')
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa{
        console.log('logica de selecionar')
        return  new Pessoa('', '')
    }
    selecionarTodos(): [any]{
        console.log('logica de getAll')
        return [new Pessoa('', '')]
    }
}