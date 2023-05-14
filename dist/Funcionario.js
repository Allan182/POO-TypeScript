"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(nome, idade, cpf, matricula, salario) {
        super(nome, idade, cpf);
        this._matricula = matricula;
        this._salario = salario;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(matricula) {
        this._matricula = matricula;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    getBonificacao(percentual = 0.1) {
        return (this._salario * percentual);
    }
    toString() {
        return `${super.toString()}\n Matricula: ${this.matricula}\n Salário: ${this.salario} `;
    }
    getNomeEmpresa() {
        return "Ifes Campus Santa Teresa";
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map