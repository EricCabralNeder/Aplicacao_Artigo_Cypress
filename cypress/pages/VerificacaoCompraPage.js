

describe('Tela de Produtos', ()=>{
    it('Selecionando Produtos', ()=>{
        
        cy.get('id=item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('css=#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$29.99')
        
        cy.get('id=item_1_title_link').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('css=#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$15.99') 

        cy.get('id=finish').click()

        cy.get('css=.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER') 
       
    })
})



