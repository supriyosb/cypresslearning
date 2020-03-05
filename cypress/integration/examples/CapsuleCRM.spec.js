/// <reference types="Cypress" />

import LoginPage from '../pageObjects/LoginPage'

describe('Capsule CRM spec 1', function(){

    before(function(){
        cy.fixture('user_data').then((user_data) => {
            this.user_data = user_data
        })
    })

    it('Verify Login to Capsule CRM page', function(){
        const lp = new LoginPage()
        lp.visit()
        cy.title().should('be.equal', 'Home CRM')
        lp.login(this.user_data.user_name, this.user_data.password)
        cy.title().should('be.equal', 'Dashboard | Home CRM')
    })

})