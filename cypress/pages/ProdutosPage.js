

class ProdutosPage {

    validandoTitulo() {
        cy.get('span.title').should('have.text', 'Products')
    }

    adicionandoProdutos() {
        cy.get('#item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        cy.get('#item_1_title_link').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }

    irParaCarrinho() {
        cy.get('#shopping_cart_container').click()
    }

}

export default new ProdutosPage();