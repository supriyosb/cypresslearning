/// <reference types="Cypress" />

describe('Second Test Suite', function(){

    it('Verify Page Title', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce demo store')
    })

})