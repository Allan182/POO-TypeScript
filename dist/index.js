"use strict";
/*  Autores : Allan e Abner
    Versão: 1.1
    Descrição: Trabalhar com Classes Abstratas,
    Polimorfismo e Herança além de  conceitos de Programção Orientada a
    Objetos de uma maneira geral utilizando TypeScript
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
const Cliente_1 = require("./Cliente");
//import { Bola } from './Bola';
//const bola = new Bola (10);
// const cliente1 = new Pessoa("Abner", 25, "145.875.247-10")
const cliente = new Cliente_1.Cliente("Abner", 25, "145.875.247-10", 99999999);
const funcionario = new Funcionario_1.Funcionario("Allan", 10, "132.681.077-45", 1, 1000);
const pessoas = [cliente, funcionario];
const toStringPeoples = (vetor) => {
    vetor.forEach(e => console.log(e.toString() + '\n'));
};
toStringPeoples(pessoas);
console.log("<---------------->");
console.log(" Bonificação : " + funcionario.getBonificacao(0.2).toFixed(2));
console.log(funcionario.toString());
console.log("<---------------->");
console.log(" Bonificação : " + funcionario.getBonificacao().toFixed(2));
console.log(funcionario.toString());
console.log("<---------------->");
const imprimiPeoples = (vetor) => {
    vetor.forEach(e => console.log(e));
};
imprimiPeoples(pessoas);
console.log("<---------------->");
console.log(cliente.getNomeEmpresa());
console.log("<---------------->");
console.log(funcionario.getNomeEmpresa());
//# sourceMappingURL=index.js.map