/// <reference types="Cypress" />

describe('Third Test Suite', function(){

    it('Verify Page Title', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerc store')
    })

})