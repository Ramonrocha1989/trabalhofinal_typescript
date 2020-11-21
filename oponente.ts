import { Lutador } from './lutador'

export default class Oponente extends Lutador {

    public get vidaOponente(): number {
        return this.vida
    }

    public sendoAtacado(): void {
        this.defesa -= 15
        this.vida -= 10
        this.defesa -= 10
    }

    public atacando(): void {
        this.defesa += 18
        this.vida += 18
        this.defesa += 18
        this.ataque += 16
    }

}
