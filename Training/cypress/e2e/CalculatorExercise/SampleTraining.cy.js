//Load the data file
const testData = require('../../fixtures/calculatorTests.json')
describe('Calculator Tests', () => {
    beforeEach('Setup Steps', function () {
        //cy.viewport('iphone-6','landscape');
        cy.visit('https://testpages.eviltester.com/styled/calculator');
        
    })
    testData.forEach(function (testValues) {
        it(testValues.testScenario, function () {
            cy.get('#number1').type(testValues.firstNumber);
            cy.get('#number2').type(testValues.secondNumber);
            cy.get('#function').select(testValues.action);
            cy.get('#calculate').click();
            cy.get('#answer').should('be.visible').and('have.text', testValues.result);
        })
    })


})