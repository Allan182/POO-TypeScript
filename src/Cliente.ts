import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {

    private _codCartao: number;

    constructor(nome: string, idade: number, cpf: string, codCartao: number) {
        super(nome, idade, cpf);
        this._codCartao = codCartao;
    }

    public get codCartao(): number {
        return this._codCartao;
    }


    public set codCartao(codCartao: number) {
        this._codCartao = codCartao;
    }

    public toString(): string {
        return `${super.toString()}\n Cod Cartão: ${this.codCartao}`;
    }

    getNomeEmpresa(){
        return "Ifes Campus Serra";
    }

}