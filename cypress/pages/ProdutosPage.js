

describe('Tela de Produtos', ()=>{
    it('Selecionando Produtos', ()=>{
        
        cy.get('id=item_4_title_link').should('have.text', 'Sauce Labs Backpack')
        cy.get('id=add-to-cart-sauce-labs-backpack').click() 
        
        cy.get('id=item_1_title_link').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('id=add-to-cart-sauce-labs-bolt-t-shirt').click() 

        cy.get('id=shopping_cart_container').click()
       
    })
})




