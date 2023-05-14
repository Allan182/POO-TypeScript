
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, idade, cpf, codCartao) {
        super(nome, idade, cpf);
        this._codCartao = codCartao;
    }
    get codCartao() {
        return this._codCartao;
    }
    set codCartao(codCartao) {
        this._codCartao = codCartao;
    }
    toString() {
        return `${super.toString()}\n Cod Cartão: ${this.codCartao}`;
    }
    getNomeEmpresa() {
        return "Ifes Campus Serra";
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map