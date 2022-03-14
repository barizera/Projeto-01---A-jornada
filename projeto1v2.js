const prompt = require('prompt-sync')();
console.clear();
let nota = 0;
// deixar as variáveis vazias para poder chamar elas dentro do "Do while".
let perg1 = "";
let perg2 = "";
let perg3 = "";
let perg4 = "";
let perg5 = "";

const nome = prompt(`Qual seu nome?: `);

console.log(`Bem vindo, ${nome}, a nossa Magic Academy. E agora já começa o seu primeiro teste. Lembrando que as respostas devem conter apenas S(sim) ou N(não).\n`);
console.log(`Você chegou na classe e já viu algumas matérias manipuláveis na mesa.\n`);

do {
    perg1 = prompt('Você chega pegando?[Sim]/[Não]: ').toLocaleLowerCase();
    if (perg1 == "nao" || perg1 == 'n"'){
    nota++; // somador da nota que vai dar o resultado no final.
    console.log(`\nMuito bem, ${nome}, vamos continuar com nossa aula!`);
    }
    else if (perg1 == "sim" || perg1 == "s") {
    console.log(`\nComeçamos com o pé direito, ${nome}`)
    } 
} while (perg1 != "sim" && perg1 != "s" && perg1 != "nao" && perg1 != "n"); // loop para que o programa só aceite aquilo que precisamos para a resposta.


console.log(`\nVamos continuar com nossa primeira aula... e ao sentar na sua banca, o mestre trouxe algumas matérias e falou que 
a manipulação errada poderia vir a explodir a classe.\n`);

do{
    perg2 = prompt(`Sabendo que se colocasse um pouco a mais de matéria a classe explodia, você tentaria?:[Sim]/[Não] `).toLocaleLowerCase();
    if (perg2 == "nao" || perg2 == "n") {
    nota++
    console.log(`\nUffa, continuamos vivos e prontos para prosseguir!`);
    } else if (perg1 == "sim" || perg1 == "s") {
    console.log(`\nKabuum, e agora estamos todos xeios de sujeira da explosão.`)
    }
} while (perg2 != "sim" && perg2 != "s" && perg2 != "nao" && perg2 != "n");

console.log(`\nVamos continuar, e agora a aula  vai ficando mais interessante...
ao aprender a lidar com a matéria, o mestre pede que você manipule sozinho, mas fala para você não
ultrapassar as barreiras do que foi ensinado  aqui em sala!\n`);

do {
    perg3 = prompt(`Se você ultrapassar o que foi liberado, você pode vir a se machucar feio, teria essa audácia?[Sim]/[Não]: `).toLocaleLowerCase();
    if (perg3 == "nao" || perg3 == "n") {
    nota++
    console.log(`\nPontos para você, magia é algo bem perigoso quando feita de maneira errada!`);
    } else if (perg1 == "sim" || perg1 == "s") {
    console.log(`\nVocê poderia ter se matado com essa audácia!`);
    }
} while (perg3 != "sim" && perg3 != "s" && perg3 != "nao" && perg3 != "n");

console.log(`\nEstamos chegando ao fim do nosso primeiro dia de aula, e vamos ao próximo passo.
com a matéria dominada, o mestre pede para que você faça aquela adição a mais que não estava liberado...\n`);
do {
    perg4 = prompt(`Sabendo que você já dominou toda a matéria, agora, você faz?[Sim]/[Não]: `).toLocaleLowerCase();
    if (perg4 == "sim" || perg4 == "s") {
    nota++
    console.log(`\nMuito bom, agora vemos que você consegue manipular com eficiência`)
    } else if (perg1 == "nao" || perg1 == "n") {
    console.log(`\nUma pena, um grande mago sabe a hora de utilizar seu  poder.`)
    }
} while (perg4 != "sim" && perg4 != "s" && perg4 != "nao" && perg4 != "n");

console.log(`\nEstamos no final da nossa primeira aula, e agora é a hora de saber se você realmente aprendeu o que foi
passado hoje aqui...
Agora é a hora de usar tudo que foi aprendido no máximo.\n`);

do { 
    perg5 = prompt(`E ai, ${nome} vamos utilizar?[Sim]/[Não]: `).toLocaleLowerCase();
    if (perg5 == "sim" || perg5 == "s") {
    nota++
    console.log(`\nÉ isso ai, vamos evoluir a  cada dia e aprender mais!`)
    } else if (perg1 == "nao" || perg1 == "n") {
    console.log(`\nQue pena, achei que ia querer superar o mestre jáno primeiro dia.`)
    }
} while (perg5 != "sim" && perg5 != "s" && perg5 != "nao" && perg5 != "n");

if (nota == 0){
    console.log(`\nAcredito que erramos plenamente no ensinamento`)
} else if (nota == 1 || nota == 2) {
    console.log(`\nVocê não precisa vir amanhã, mesmo tentando, você foi reprovado.`)
} else if (nota == 3) {
    console.log(`\nQuase que não me animo para pedir que voltasse amanhã, mas vejo potencial em você!`)
} else if (nota == 4) {
    console.log(`\nVocê tem potencial para ser um grande aluno!`)
} else if (nota == 5) {
    console.log(`\nParabéns!! Acredito que com toda essa disciplina, você vai ser um dos melhores!`)
}









