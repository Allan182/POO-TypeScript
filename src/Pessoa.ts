export abstract class Pessoa {

    private _nome: string;
    private _idade: number;
    private _cpf: string;

    constructor(nome: string, idade: number, cpf: string) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
    }

    public get nome(): string {
        return this._nome;
    }


    public set nome(nome: string) {
        this._nome = nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(idade: number) {
        this._idade = idade
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(cpf: string) {
        this._cpf = cpf;
    }

    public toString(): string {
        return ` Nome: ${this.nome} \n Idade: ${this.idade} \n CPF: ${this.cpf}`
    }

    abstract getNomeEmpresa():string; 


}