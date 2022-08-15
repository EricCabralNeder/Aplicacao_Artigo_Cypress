

class SignipPage{

    go(){
        cy.viewport(1044,900)
        cy.visit('https://www.saucedemo.com/')
    }

    RealizarLogin(){
        cy.get('#user-name').type('standard_user')     
        cy.get('id=password').type('secret_sauce ')
        cy.get('id=login-button').click()
    }

}

export default SignipPage;