import { When } from "cypress-cucumber-preprocessor/steps";

import landingPage from "../../pages/landing.page";
import dashboardPage from "../../pages/profile/dashboard.page";

When(/the user navigates to 'Dashboard' page$/, () => {
    landingPage.clickOnMyPagesButton()
})

When(/the user navigates to 'My Favourites' page$/, () => {
    landingPage.clickOnMyPagesButton()
    dashboardPage.navigateToTab(dashboardPage.tabs.favourites)
})
