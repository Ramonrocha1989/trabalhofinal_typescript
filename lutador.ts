export class
  Lutador {
  constructor(
    protected _nome: string,
    protected ataque: number,
    protected defesa: number,
    protected energia: number,
    protected vida: number) {

  }

  public habilidades(): string {
    return (

      "Oponente: \n" +
      "Nome: " +
      this._nome +
      ("\nAtaque: " + this.ataque) +
      ("\nDefesa: " + this.defesa) +
      ("\nEnergia: " + this.energia) +
      ("\nVida:  " + this.vida)
    );
  }

  public score(): number {
    return this.energia + this.vida + this.ataque + this.defesa

  }

  public get nome(): string {
    return this._nome
}

}