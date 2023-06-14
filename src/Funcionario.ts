import { Pessoa } from "./Pessoa";


export class Funcionario extends Pessoa {

    private _matricula: number;
    private _salario: number;

    constructor(nome: string, idade: number, cpf: string, matricula: number, salario: number) {
        super(nome, idade, cpf);
        this._matricula = matricula;
        this._salario = salario;

    }

    public get matricula(): number {
        return this._matricula;
    }


    public set matricula(matricula: number) {
        this._matricula = matricula;
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(salario: number) {
        this._salario = salario;
    }


    public getBonificacao(percentual: number = 0.1): number {
        return (this._salario * percentual);
    }

    public toString(): string {
        return `${super.toString()}\n Matricula: ${this.matricula}\n Salário: ${this.salario} `
    }

    public getNomeEmpresa(){
        return "Ifes Campus Santa Teresa";
    }

    

}