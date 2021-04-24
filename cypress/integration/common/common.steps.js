import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given(/the user is logged in$/, () => {
    cy.fixture('user.json').then(
        user => { cy.signIn(user.email, user.password) }
    )
})

When(/the user refreshes the page$/, () => {
    cy.reload()
})
