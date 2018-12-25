//import { ConcessionariaDao } from "./ConcessionariaDao"
import Concessionaria from './Concessionaria'
//import { PessoaDao } from "./PessoaDao"
import Pessoa from './Pessoa'
//import { CarroDao } from "./CarroDao"
import Carro from "./Carro"
//import { MotoDao } from "./MotoDao"
import Moto from "./Moto"
//import { VeiculoDao } from "./VeiculoDao"
import Veiculo from "./Veiculo"
import { Dao } from './Dao'

//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])
//dao.inserir(concessionaria)
let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
dao.remover(1)

//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')
//dao2.atualizar(pessoa)

//let dao3: CarroDao = new CarroDao()
let carro: Carro = new Carro('', 0)
//dao3.remover(1)

//let dao4: MotoDao = new MotoDao()
let moto: Moto = new Moto()
//dao3.selecionar(1)

//let dao5: VeiculoDao = new VeiculoDao()
let veiculo: Veiculo = new Veiculo()
//dao3.selecionarTodos()

