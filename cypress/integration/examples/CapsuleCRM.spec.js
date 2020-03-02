/// <reference types="Cypress" />

import LoginPage from '../pageObjects/LoginPage'

describe('Capsule CRM spec 1', function(){

    it('Verify Login to Capsule CRM page', function(){
        const lp = new LoginPage()
        lp.visit()
        cy.title().should('be.equal', 'Home CRM')
        lp.login('supriyo.sb', 'berhampor')
        cy.title().should('be.equal', 'Dashboard | Home CRM')
    })

})