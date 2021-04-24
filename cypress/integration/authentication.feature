Feature: Authentication

    As a user
    I want to be able to perform sign in/sign out actions
    So I can access my profile and control authentication session

    Scenario: Sign in the account
        Given the user is on the Landing page
        When the user clicks on 'LOGIN' button
            And the user types email
            And the user types password
            And the user clicks on 'Sign in' button
        Then the user is signed into profile
            And the user's first name is displayed in profile dashboard

    Scenario: Sign out of the account
        Given the user is logged in
        When the user navigates to 'Dashboard' page
            And the user clicks on 'Logout' link
        Then the user is logged out
