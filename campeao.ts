import { Lutador } from './lutador'

export default class Campeao extends Lutador {

    public get nome(): string {
        return this._nome
    }

    public treinarAtaque(): void {
        this.ataque += Math.round(Math.random() * 5)
        this.energia -= Math.round(Math.random() * 3)
        if (this.ataque > 100) {
            this.ataque = 100

        }

        if (this.energia <= 0) {
            this.energia = 0
            console.log(`Precisa descansar`);
        }

    }

    public treinarDefesa(): void {
        this.defesa += Math.round(Math.random() * 5)
        this.vida -= Math.round(Math.random() * 3)

        if (this.defesa > 100) {
            this.defesa = 100

        }
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`Precisa alimentar-se`);
        }

    }

    public descansar(): void {
        this.energia += Math.round(Math.random() * 5)
        if (this.energia > 100) {
            this.energia = 100

        }
    }

    public alimentar(): void {
        this.vida += Math.round(Math.random() * 6)
        if (this.vida > 100) {
            this.vida = 100

        }

    }


}


