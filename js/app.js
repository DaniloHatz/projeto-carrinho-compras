let valorTotal;
limpar();

function adicionar() {
    //recuperar valores - nome, valor e quantidade
    let produto = document.getElementById(`produto`).value;
    let nomeProduto = produto.split(`-`)[0];
    let valorUnitario = produto.split(`R$`)[1];
    let quantidade = document.getElementById(`quantidade`).value;

    if (!produto || produto.trim() === ``) {
        alert(`Favor selecionar um produto válido.`);
        return;
    }

    if (quantidade <= 0 || isNaN(quantidade)) {
        alert(`Favor informar um quantidade válida do produto.`);
        return;
    }
 
    //calcular o preço / subtotal
    let preco = quantidade * valorUnitario;

    //adicionar produtos no carrinho
    let carrinho = document.getElementById(`lista-produtos`);
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    //calcular o valor total
    valorTotal = valorTotal + preco;
    let total = document.getElementById(`valor-total`);
    total.textContent = `R$ ${valorTotal}`;

    document.getElementById(`quantidade`).value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById(`lista-produtos`).innerHTML = ``;
    document.getElementById(`valor-total`).textContent = `R$0`;
}