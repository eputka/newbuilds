class ListingsPage {
    url = '/listings'

    addListingTileToFavourites = listing => {
        cy.get('.property-title')
            .contains(listing)
            .parents('.property-card')
            .find('.property-favourite')
            .click()
    }

    clickOnListingTile = listing => {
        cy.get('.property-title').contains(listing).click()

        // Just a workaround for Cypress to not fail test due to listener exception
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    clickOnFavouriteButton = () => {
        cy.get('.tools .tool-row [data-testid="project-favourite-button"]').click()
    }
}

export default new ListingsPage();
