


class InformacoesCompraPage{

    preencherFormulario(){
        cy.get('#first-name').type('Testes')    
        cy.get('#last-name').type('Teste2')    
        cy.get('#postal-code').type('58059200')    
        
        cy.get('#continue').click()
    }

}

export default new InformacoesCompraPage();
