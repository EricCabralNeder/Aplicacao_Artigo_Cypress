import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

import telaLoginPage from "../../pages/TelaLoginPage";
import produtosPage from '../../pages/ProdutosPage';
import carrinhoComprasPage from '../../pages/CarrinhoComprasPage'
import informacoesCompraPage from '../../pages/InformacoesCompraPage'
import verificacaoCompraPage from '../../pages/VerificacaoCompraPage'

Given("que estou na tela de produtos", () => {
    telaLoginPage.go()
    telaLoginPage.realizarLogin()
    produtosPage.validandoTitulo()
});
When("adiciono alguns produtos ao carrinho", () => {
    produtosPage.adicionandoProdutos()
});
And("abro carrinho de compras", () => {
    produtosPage.irParaCarrinho()
    carrinhoComprasPage.verificandoCompras()
});
And("realizo o checkout", () => {
    carrinhoComprasPage.irParaCheckout()
    informacoesCompraPage.preencherFormulario()
});
Then("devo conseguir ver a mensagem {string}", (mensagem) => {
    verificacaoCompraPage.relizarCompra(mensagem)
});