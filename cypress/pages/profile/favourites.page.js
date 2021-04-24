class FavouritesPage {
    url = '/profile/favourites'

    getProjectTile = project => {
        return cy.get('[data-testid="property-card-link"] .property-title').contains(project)
    }

    removeTileFromFavourites = project => {
        this.getProjectTile(project)
            .parents('.property-card')
            .find('.property-favourite')
            .click()
    }

    verifyTileDisplayedInMyFavourites = project => {
        this.getProjectTile(project).should('be.visible')
    }

    verifyTilesNotDisplayedInMyFavourites = () => {
        cy.get('[data-testid="property-card-link"] .property-title').should('not.exist')
        cy.contains("You will find your favourites here").should('be.visible')
    }

}

export default new FavouritesPage();
