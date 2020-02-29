/// <reference types="Cypress" />

describe('Fourth Test Suite', function(){

    it('Verify Page Title 1', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce demo store')
    })

    it('Verify Page Title 2', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce demo store')
    })

    it('Verify Page Title 3', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce store')
    })

    it('Verify Page Title 4', function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('be.eq', 'nopCommerce demo store')
    })

})