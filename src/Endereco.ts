export class Endereco {
    
    private _rua: string;
    private _cidade: string;
    private _uf: string;
    private _pais: string;

    constructor(rua: string, cidade: string, uf: string, pais: string) {
        this._rua = rua;
        this._cidade = cidade;
        this._uf = uf;
        this._pais = pais;
    }

    public get rua(): string {
        return this._rua;
    }

    public set rua(rua: string) {
        this._rua = rua;
    }


    public get cidade(): string {
        return this._cidade;
    }

    public set cidade(cidade: string) {
        this._cidade = cidade;
    }

    public get uf(): string {
        return this._uf;
    }

    public set uf(uf: string) {
        this._uf = uf;
    }

    public get pais(): string {
        return this._pais;
    }

    public set pais(pais: string) {
        this._pais = pais
    }

} 