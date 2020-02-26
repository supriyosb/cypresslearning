/// <reference types="Cypress" />

describe('First Test Suite', function(){

    it('Verify Page Title', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce demo store')
    })

    it('Verify Page Title Neg', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce demo store')
    })

})