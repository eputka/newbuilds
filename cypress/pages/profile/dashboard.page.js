class DashboardPage {
    url = '/profile/dashboard'

    tabs = {
        myFeed: '[data-testid="dashboard-profile-link"]',
        notifications: '[data-testid="notifications-profile-link"]',
        savedSearches: '[data-testid="searches-profile-link"]',
        favourites: '[data-testid="favourites-profile-link"]',
        myProfile: '[data-testid="user-profile-link"]'
    }

    visitPage = () => {
        cy.visit(this.url)
    }

    navigateToTab = tab => {
        cy.get(tab).click()
    }

    verifyFirstNameDisplayed = name => {
        cy.get('.feed').contains("Hi, " + name)
    }

    clickOnLogoutLink = () => {
        cy.get('[data-testid="logout-link"]').click()
    }
}

export default new DashboardPage();
