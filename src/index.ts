/*  Autores : Allan e Abner
    Versão: 1.1
    Descrição: Trabalhar com Classes Abstratas, 
    Polimorfismo e Herança. Conceitos de Programção Orientada a 
    Objetos utilizando TypeScript 
*/

import { Funcionario } from './Funcionario';
import { Cliente } from './Cliente';
import { Pessoa } from './Pessoa';
//import { Bola } from './Bola';

//const bola = new Bola (10);
// const cliente1 = new Pessoa("Abner", 25, "145.875.247-10")
const cliente = new Cliente("Abner", 25, "145.875.247-10", 99999999);
const funcionario = new Funcionario("Allan", 10, "132.681.077-45", 1, 1000);
const pessoas = [cliente, funcionario];


const toStringPeoples = (vetor: Pessoa[]) => {
    vetor.forEach(e => console.log(e.toString() + '\n'));
}
toStringPeoples(pessoas);

console.log("<---------------->");

console.log(" Bonificação : " + funcionario.getBonificacao(0.2).toFixed(2));
console.log(funcionario.toString());

console.log("<---------------->");

console.log(" Bonificação : " + funcionario.getBonificacao().toFixed(2));
console.log(funcionario.toString());

console.log("<---------------->");

const imprimiPeoples = (vetor: Pessoa[]) => {
    vetor.forEach(e => console.log(e)
    )
}
imprimiPeoples(pessoas);

console.log("<---------------->");

console.log(cliente.getNomeEmpresa());

console.log("<---------------->");

console.log(funcionario.getNomeEmpresa());