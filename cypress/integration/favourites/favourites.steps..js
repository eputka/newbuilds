import { Then, When } from "cypress-cucumber-preprocessor/steps";

import landingPage from "../../pages/landing.page";
import listingsPage from "../../pages/listings.page";
import favouritesPage from "../../pages/profile/favourites.page";

When(/the user types "(.+?)" in search bar$/, text => {
    landingPage.typeInSearchBar(text)
})

When(/the user clicks on "(.+?)" search result$/, text => {
    landingPage.clickOnSearchResult(text)
})

When(/the user clicks on 'Favourite' icon on "(.+?)" project tile$/, project => {
    listingsPage.addListingTileToFavourites(project)
})

When(/the user clicks on "(.+?)" project tile$/, (project) => {
    listingsPage.clickOnListingTile(project)
})

When(/the user clicks on 'Favourite' icon$/, () => {
    listingsPage.clickOnFavouriteButton()
})

When(/the user removes the "(.+?)" project from Favourites$/, project => {
    favouritesPage.removeTileFromFavourites(project)
})

Then(/the "(.+?)" project is displayed in favourites list$/, project => {
    favouritesPage.verifyTileDisplayedInMyFavourites(project)
})

Then(/the My Favourites list is empty$/, () => {
    favouritesPage.verifyTilesNotDisplayedInMyFavourites()
})
