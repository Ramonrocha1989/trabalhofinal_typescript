import Campeao from './campeao';
import Oponente from './oponente';
import prompt from 'prompt-sync';

let teclado = prompt();

export default class Luta {
    constructor(
        public campeao: Campeao,
        public oponente: Oponente,

    ) { }

    private titulo(): void {
        console.log('***************Personagem***************')
        console.log('|1. Socar                              |')
        console.log('|2. Chutar                             |')
        console.log('|3. Defender                           |')
        console.log('|4. Levar golpe do inimgo              |')
        console.log('****************************************')
        console.log();
    }

    public confronto(): void {
        let con;
        if (this.campeao.score() > this.oponente.score()) {
            while (this.oponente.vidaOponente > 0) {
                this.titulo()
                let escolha = +teclado('Qual opoção: ')
                console.log();

                if (escolha == 1) {
                    this.oponente.sendoAtacado();
                    console.log(`Acertou em cheio`);
                    console.log(`Vida do oponenete: ${this.oponente.vidaOponente}`);
                    console.log();

                } else if (escolha == 2) {
                    this.oponente.sendoAtacado();
                    console.log(`Chute bem dado`);
                    console.log(`Vida do oponenete: ${this.oponente.vidaOponente}`);
                    console.log();

                } else if (escolha == 3) {
                    this.oponente.atacando();
                    console.log(`Seu inimigo é forte tome cuidado`);
                    console.log(`Vida do oponenete: ${this.oponente.vidaOponente}`);
                    console.log();
                } else if (escolha == 4) {
                    this.oponente.atacando();
                    console.log(`Tome cuidado os golpes estão entrando`);
                    console.log(`Vida do oponenete: ${this.oponente.vidaOponente}`);
                    console.log();
                } else {
                    console.log(`Informe uma opção valida`);

                }

            }
            return con = console.log(`Você Venceu`);


        } else {
            console.log(`Você ainda não está preparado treine mais um pouco`);

        }

    }

}
