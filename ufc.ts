import Campeao from './campeao';
import Oponente from './oponente';
import Luta from './luta'
import prompt from 'prompt-sync';

console.clear();

console.log(`Escolha o nome dos lutadores`);

let teclado = prompt();
let campeao: Campeao = new Campeao(teclado('Nome do seu lutador: '), Math.round(Math.random() * 50 + 1), Math.round(Math.random() * 50 + 1), Math.round(Math.random() * 50 + 1), Math.round(Math.random() * 50 + 1));
let oponente: Oponente = new Oponente(teclado('Nome do Oponente: '), Math.round(Math.random() * 50 + 50), Math.round(Math.random() * 50 + 50), Math.round(Math.random() * 50 + 50), Math.round(Math.random() * 50 + 50));
let luta: Luta = new Luta(campeao, oponente);
let option: Number = 0;

console.log(`Lutadores adicionados`);
console.log();

console.log(campeao.habilidades());


while (oponente.vidaOponente > 0) {


    console.log('***************Personagem***************')
    console.log('|1. Treinar Ataque                     |')
    console.log('|2. Treinar Defesa                     |')
    console.log('|3. Descansar                          |')
    console.log('|4. Alimentar-se                       |')
    console.log('|5. Seus atributo                      |')
    console.log('|6. Atributos do oponente              |')
    console.log('|7. Enfrentar Oponente                 |')
    console.log('****************************************')
    console.log();

    option = +teclado('Escolha uma opção: ')
    console.log();

    switch (option) {

        case 1:
            campeao.treinarAtaque();
            console.log(campeao.habilidades());
            break;

        case 2:
            campeao.treinarDefesa();
            console.log(campeao.habilidades());
            break;

        case 3:
            campeao.descansar();
            console.log(campeao.habilidades());
            break;

        case 4:
            campeao.alimentar();
            console.log(campeao.habilidades());
            break;

        case 5:
            console.log(campeao.habilidades());
            console.log(`Seus pontos de vida: ${campeao.score()}`);
            break;
        case 6:
            console.log(oponente.habilidades());
            console.log(`Pontos de vida do oponente: ${oponente.score()}`);

            break;

        case 7:
            luta.confronto()
            break;

        default:
            break;
    }

}
console.log(`JOGO ACABOU`);
