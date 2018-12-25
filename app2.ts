import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

/* --- criar carros --- */
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

/* --- montar a lista de carros da concessionaria --- */
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

let cliente = new Pessoa('João', 'Veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>  {
    if(carro[`modelo`]== cliente.dizerCarroPreferido()){
        // comprar carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())