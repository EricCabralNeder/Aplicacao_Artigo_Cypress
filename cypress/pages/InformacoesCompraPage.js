

describe('Tela de Produtos', ()=>{
    it('Selecionando Produtos', ()=>{
        
        cy.get('id=first-name').type('Testes')    
        cy.get('id=last-name').type('Teste2')    
        cy.get('id=postal-code').type('58059200')    
        
        cy.get('id=continue').click()
       
    })
})



