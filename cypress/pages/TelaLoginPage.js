

class TelaLoginPage{

    go(){
        cy.viewport(1044,900)
        cy.visit('https://www.saucedemo.com/')
    }

    RealizarLogin(){
        context('Dado que acesso a página do buscador', () => {
            cy.viewport(1044,900)
            cy.visit('https://www.saucedemo.com/')
            cy.get('#user-name').type('standard_user') 
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
        })
    }
}

export default TelaLoginPage;
