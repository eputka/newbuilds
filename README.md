# Instructions: 

1) `npm install` - install dependencies
2) `npm run cypress:open` - launch cypress
3) In Cypress UI select to run all specs 

Keep in mind - there is no cleanup done after adding project as a favourite, because of that, there will be tests that would fail on **second** execution.
Cleanup can be done either manually by logging in and removing favourite from property used in test OR by duplicating "Removing project from favourites" scenario and placing at the bottom of `favourites.feature` file

# Results:
## Code related issues:
1) data-testid's are not unique for some elements, like:
    - Login form, email field: `data-testid="user-email"`
    - Reset password form, email field: `data-testid="user-email"`

    In this case, email fields should be named by component forms in which they located, f.e. 
    `data-testid="user-login-email"`

2) Some key elements are missing `data-testid` attribute: 
    - Search bar on Landing page;
    - Search icon/button on Landing page;

3) Listener exception when trying to access project page - https://newbuilds.com/listings/mineralvandsfabrikken
 
    `Uncaught TypeError: Cannot read property 'addEventListener' of null` 
 
4) Component for navigation is duplicated in section 
`<section class="hero container newbuilds">` on Landing page for some reasons?

## Bugs: 
1) (Minor) Search bar placeholder text is longer than field width

<details>

**Steps to reproduce:**
1) Navigate to listings page https://newbuilds.com/listings

**Actual results:**
- Search bar is visible
- And search input field placeholder text is longer than field width

**Expected results:**
- Search bar is visible
- And search input field placeholder text is shorter than width of the field

Image:

![image](https://user-images.githubusercontent.com/21192631/115952436-93932d80-a4ee-11eb-9679-0e7231161763.png)
</details>

2) Footer is not displayed on listings page

<details>

**Steps to reproduce:**
1) Navigate to listings page https://newbuilds.com/listings

**Actual results:**
- Footer is not visible

**Expected results:**
- Footer is visible

Image:

![image](https://user-images.githubusercontent.com/21192631/115952487-de14aa00-a4ee-11eb-84d9-524bc33c3fee.png)

</details>

## Possible improvements: 
1) Save user sessions;
2) Improve UI on property tiles - almost on 40% of all tiles background is blending with slider arrows and favourite icon which makes them barely noticable
