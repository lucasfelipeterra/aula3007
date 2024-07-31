const prompt = require('prompt-sync')();
const produtos = [];

const validarIndice = (indice) => indice >= 0 && indice < produtos.length;

const modelo = (indice = -1) => {
    const nomeProd = prompt('Nome do produto: ');
    const valor = prompt('Digite o valor do produto: ');

    if (
        nomeProd !== '' &&
        valor !== ''  
    ) {
        return {
            nomeProd,
            valor,
        };
    } else {
        console.log('Dados inválidos');
        return undefined;
    }
};

const criar = () => {
    const produto = modelo();
    if (produto !== undefined) {
        produtos.push(produto);
        console.log('Aluno cadastrado com sucesso');
        console.log(produtos);
    }
};


const listar = () => {
    if (produtos.length === 0) {
        console.log('Nenhum produto encontrado ');
        return false;
    } else {
        produtos.forEach((produto, indice) => {
            console.log(`${indice + 1}.
            Nome do Produto: ${produto.nomeProd}
            Valor: ${produto.valor}
        `);
        });
        return true;
    }
};


const remover = () => {
    if (!listar()) {
        return;
    }
    const indice = parseInt(prompt('Qual indice você deseja remover? '), 10) - 1;

    if (validarIndice(indice)) {
        produtos.splice(indice, 1);
        console.log('Produto removido comsucesso');
    } else {
        console.log('Falha na remoção');
    }
};


const atualizar = () => {
    if (!listar()) {
        return;
    }

    const indice = parseInt(prompt('Qual o indice que deseja atualizar? '), 10) - 1;

    const produto = modelo(indice);

    if (produto !== undefined && validarIndice(indice)) {
        produtos[indice] = produto;
        console.log('Produto atualizado com sucesso');
    } else {
        console.log('Falha na atualização');
    }
};

module.exports = {
    criar,
    listar,
    remover,
    atualizar,
};