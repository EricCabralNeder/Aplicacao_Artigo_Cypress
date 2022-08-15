

describe('Compra rapida', ()=>{
    it('pagina deve estar online', ()=>{
        cy.viewport(1044,900)
        cy.visit('https://www.saucedemo.com/')
    })
    it('Realizar Login', ()=>{
        //cy.get('id=user-name').should('have.text', '')

        cy.get('id=user-name').type('standard_user')     
        cy.get('id=password').type('secret_sauce ')
        cy.get('id=login-button').click()
    })
})