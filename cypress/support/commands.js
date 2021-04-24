import landingPage from "../pages/landing.page";

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length),
        })
    }

    return originalFn(element, text, options)
})

Cypress.Commands.add('signIn', (email, password) => {
    landingPage.visitPage()
    landingPage.clickOnLoginButton()
    landingPage.typeLoginEmail(email)
    landingPage.typeLoginPassword(password)
    landingPage.clickOnSignInButton()
    landingPage.verifySignedIn()
})
