const prompt = require('prompt-sync')();
const { criar, atualizar, listar, remover } = require('./modulo.js');

while (true) {
    console.log(`
1 - Adicionar produto
2 - Listar produtos
3 - Remover produto
4 - Atualizar produto
5 - para sair
\n
`);

    const opcao = Number(prompt(`Escolha uma opção acima: `));
    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            remover();
            break;
        case 4:
            atualizar();
            break;
        case 5:
            process.exit();
            break;
        default:
            console.log(`Opção invalida`);
            break;
    }
}