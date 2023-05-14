
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(rua, cidade, uf, pais) {
        this._rua = rua;
        this._cidade = cidade;
        this._uf = uf;
        this._pais = pais;
    }
    get rua() {
        return this._rua;
    }
    set rua(rua) {
        this._rua = rua;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(cidade) {
        this._cidade = cidade;
    }
    get uf() {
        return this._uf;
    }
    set uf(uf) {
        this._uf = uf;
    }
    get pais() {
        return this._pais;
    }
    set pais(pais) {
        this._pais = pais;
    }
}
exports.Endereco = Endereco;
//# sourceMappingURL=Endereco.js.map