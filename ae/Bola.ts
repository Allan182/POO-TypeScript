export class Bola {

    private _raio: number;

    constructor(raio: number = 0) {
        this._raio = raio
    }

    get raio(): number {
        return this._raio;
    }

    set raio(raio: number) {
        this._raio = raio;
    }

}