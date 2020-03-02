/// <reference types = "Cypress" />
class LoginPage {

    visit(){
        cy.visit("https://supriyoautomation.capsulecrm.com/login")
    }

    setUsername(username){
        cy.get("input[id='login:usernameDecorate:username']").clear().type(username)
    }

    setPassword(password){
        cy.get("input[id='login:passwordDecorate:password").clear().type(password)
    }

    clickLoginButton(){
        cy.get("input[id='login:login']").click()
    }

    login(username, password){
        this.setUsername(username)
        this.setPassword(password)
        this.clickLoginButton()
    }

}

export default LoginPage