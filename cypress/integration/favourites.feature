Feature: My Favourites

    As a Home Buyer
    I want to be able to save property listings that I am interested in
    So that I can have quick access to them

    # TODO: Make sure that there are no favourites repeating test for second time
    # Usually it is cleaned up by: 
    #       1. Clearing DB before every test - generating user again
    #       2. Backend command or API request
    # In this case, I am expecting that the user doesn't have any favourites, 
    # but to be more foolproof, I could add a functionality that checks if the tile is
    # not a favourite
    Scenario: Marking project as a favourite from preview image
        Given the user is logged in
        When the user types "Copenhagen" in search bar
            And the user clicks on "Copenhagen (By)" search result
            And the user clicks on 'Favourite' icon on "Mineralvandsfabrikken" project tile
            And the user navigates to 'My Favourites' page
        Then the "Mineralvandsfabrikken" project is displayed in favourites list

    Scenario: Removing project from favourites
        Given the user is logged in
        When the user navigates to 'My Favourites' page
            And the user removes the "Mineralvandsfabrikken" project from Favourites
            And the user refreshes the page
        Then the My Favourites list is empty

    # INFO: Keep in mind that cleanup is needed after this scenario, because tile is not
    # removed from favorites after the test. Quick cleanup can be done manually by removing 
    # favourite from the tile or by copy-pasting scenario above ^ after this scenario. 
    Scenario: Marking project as a favourite from full description page
        Given the user is logged in
        When the user types "Copenhagen" in search bar
            And the user clicks on "Copenhagen (By)" search result
            And the user clicks on "Mineralvandsfabrikken" project tile
            And the user clicks on 'Favourite' icon
            And the user navigates to 'My Favourites' page
        Then the "Mineralvandsfabrikken" project is displayed in favourites list
