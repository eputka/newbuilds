import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import landingPage from "../../pages/landing.page";
import dashboardPage from "../../pages/profile/dashboard.page";

Given(/the user is on the Landing page$/, () => {
    landingPage.visitPage()
})

When(/the user clicks on 'LOGIN' button$/, () => {
    landingPage.clickOnLoginButton()
})

When(/the user types email$/, () => {
    cy.fixture('user.json').then(
        user => { landingPage.typeLoginEmail(user.email) }
    )
})

When(/the user types password$/, () => {
    cy.fixture('user.json').then(
        user => { landingPage.typeLoginPassword(user.password) }
    )
})

When(/the user clicks on 'Sign in' button$/, () => {
    landingPage.clickOnSignInButton()
})

When(/the user clicks on 'Logout' link$/, () => {
    dashboardPage.clickOnLogoutLink()
})

Then(/the user is signed into profile$/, () => {
    landingPage.verifySignedIn()
})

Then(/the user's first name is displayed in profile dashboard$/, () => {
    dashboardPage.visitPage()

    cy.fixture('user.json').then(
        user => { dashboardPage.verifyFirstNameDisplayed(user.name) }
    )
})

Then(/the user is logged out/, () => {
    landingPage.verifyNotSignedIn()
})
