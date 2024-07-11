const testData = require('../../fixtures/calculatorTests')
describe('Calculator Tests', () => {
    beforeEach('Setup Steps', function () {
        cy.visit('https://testpages.eviltester.com/styled/calculator');
    })
    testData.forEach(function (testValue, index) {
        it(testValue.testScenario, function () {
            cy.get('#number1').type(testValue.firstNumber);
            cy.get('#number2').type(testValue.secondNumber);
            cy.get('#function').select(testValue.action);
            cy.get('#calculate').click();
            cy.get('#answer').should('be.visible').and('have.text', testValue.result);
        })
    })


})