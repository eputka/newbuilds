class LandingPage {
    url = '/'

    visitPage = () => {
        cy.visit(this.url)
    }

    clickOnLoginButton = () => {
        // Had to do workaround because navigation container is duplicated two
        // times in the code with all underlying elements
        cy.get('[data-testid="modal-login-button"]').first().click()
    }

    typeLoginEmail = email => {
        // User email field that is used for log in action is not unique, therefore
        // it is necessary to chain form with input field element
        cy.get('[data-testid="modal-login-form"] [data-testid="user-email"]').type(email)
    }

    typeLoginPassword = password => {
        cy.get('[data-testid=user-password]').type(password, { sensitive: true })
    }

    clickOnSignInButton = () => {
        cy.get('[data-testid="modal-login-submit"]').click()
    }

    verifySignedIn = () => {
        cy.get('[data-testid="modal-authentication-form"]', { timeout: 10000 }).should('not.exist')

        cy.url().should('eq', 'https://newbuilds.com/')
        cy.get('#my-profile').contains("MY PAGES").should('be.visible')
    }

    verifyNotSignedIn = () => {
        cy.url().should('eq', 'https://newbuilds.com/')
        cy.get('#my-profile').contains("MY PAGES").should('not.exist')
        cy.get('#my-profile').contains("LOGIN").should('be.visible')
    }

    clickOnMyPagesButton = () => {
        cy.get('#my-profile').contains("MY PAGES").click()
    }

    typeInSearchBar = text => {
        cy.get('.search-container .form-text-field').type(text)
    }

    clickOnSearchResult = text => {
        cy.get('.search-section .section-result').contains(text).click()

        // Some listings are property listings are displayed on landing page as well
        // therefore we need to make sure we are on the correct page
        cy.url().should('include', '/listings')
    }
}

export default new LandingPage();
