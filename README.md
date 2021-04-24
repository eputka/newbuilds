# Results:

## Code related issues:

    1) Component for navigation is duplicated (and hidden) in section 
    `<section class="hero container newbuilds">` on Landing page for some reasons?

    2) data-testid's are not unique
        One of many examples: 
            - Login form, email field: `data-testid="user-email"`
            - Reset password form, email field: `data-testid="user-email"`

        In this case, email fields should be named by component forms in which they located, f.e. 
        `data-testid="user-login-email"`
 
    3) Some key elements are missing `data-testid` attribute: 
            - Search bar on Landing page
            - Search icon/button on Landing page

    4) Listener exception when trying to access project page - https://newbuilds.com/listings/mineralvandsfabrikken
     `Uncaught TypeError: Cannot read property 'addEventListener' of null` 

## Bugs: 
    1) Search bar placeholder text is longer than field width

## Possible improvements: 
    1) Save user sessions
    2) Improve UI on property tiles - on almost 40% of all tiles it is hard to see 
    that user can interact with sliders and mark project as favourite. 
    3) Standartize project naming - some places go with "Eiendom.no" title, some with "newbuilds.com" 
        For example: 
            - "Eiendom.no" logo when user is on feed/dashboard page
            - "Sign in to Eiendom.no to save project" displayed when trying to add project as favourite as a visitor
            - Footer on feed/dashboard page has multiple usage of "Eiendom.no"
    
    
  
