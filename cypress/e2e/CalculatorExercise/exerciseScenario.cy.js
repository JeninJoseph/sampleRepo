describe('Calculator Tests', () => {
    beforeEach('Setup Steps', function () {
        cy.visit('https://testpages.eviltester.com/styled/calculator');
    })
    it('Add two Integers',function (){
        cy.get('#number1').type('5');
        cy.get('#number2').type('15');
        cy.get('#function').select('plus');
        cy.get('#calculate').click();
        cy.get('#answer').should('be.visible').and('have.text','20');
    })
    it('Add two Float Numbers',function (){
        cy.get('#number1').type('5.3');
        cy.get('#number2').type('15.5');
        cy.get('#function').select('plus');
        cy.get('#calculate').click();
        cy.get('#answer').should('be.visible').and('have.text','20.8');
    })
    it('Add two Negative Numbers',function (){
        cy.get('#number1').type('-1');
        cy.get('#number2').type('-5');
        cy.get('#function').select('plus');
        cy.get('#calculate').click();
        cy.get('#answer').should('be.visible').and('have.text','-6');
    })
    it('Add a charcter',function (){
        cy.get('#number1').type('-1');
        cy.get('#number2').type('A');
        cy.get('#function').select('plus');
        cy.get('#calculate').click();
        cy.get('#answer').should('be.visible').and('have.text','ERR');
    })
    
})