

describe('Tela de Produtos', ()=>{
    it('Selecionando Produtos', ()=>{
        
        cy.get('id=item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('css=#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$29.99')
        
        cy.get('id=item_1_title_link').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('css=#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$15.99') 

        cy.get('id=checkout').click()
       
    })
})
