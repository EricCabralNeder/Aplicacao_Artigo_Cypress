

class VerificacaoCompraPage {

    relizarCompra(texto) {
        cy.get('#item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$29.99')

        cy.get('#item_1_title_link').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$15.99')

        cy.get('#finish').click()

        cy.get('h2').should('have.text', texto)
    }

}

export default new VerificacaoCompraPage();

