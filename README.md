# Shipt Landing Page

# Installation Instructions
1. Clone repo 
```JavaScript
git clone https://github.com/TmNguyen12/Truong_LandingPage_Shipt
```
2. Navigate to the root directory of project
```JavaScript
cd Truong_LandingPage_Shipt
```
3. Install dependencies while in the root directory
```JavaScript
npm install 
```
4. Run application.
```JavaScript
npm start
```
5. Navigate to [localhost](http://localhost:3000 on your webbrowser.
```
http://localhost:3000/
```

# Technologies
* React.js 
* JavaScript
* CSS3
* HTML5

# Tasks (All Completed) 
1. Build a landing page per the design document 
2. Connect to the zip code API (https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/{code}​)
3. User can input a zip code to search for available stores in that area
4. Results are displayed alphabetically, with "Now Available" or the upcoming date.
  * Test data can be found at the following: 35203, 98001, 99515
5. Icons and input text change color when an invalid zipcode is entered.
6. Make the site responsive

# Bonus
1. Enter key and Tab-then-Space bar submit the zipcode query. 

# Design Decisions

- Responsive Design 
  - Media queries were based off of the way the content appeared on screen
    - this minimizes the need to add media queries for every device size
- Font choice 
  - defaulted to Scandia Regular
  - Sometimes, the design documents listed Scandia as the font but displayed Helvetica
  - If the design documents requested Scandia-Bold but that choice didn't flow well with the overall appearance, I chose to use Scandia-Regular and add font-weight
- In a production environment, all of these choices would be discussed with the designer in a collaborative fashion 

# Project Structure 
- src
  - assets
    - font
    - images
    - stylesheets
  - components
    - Footer-Header
    - Hero
    - Informational
    - Navigation
    - Results
  - Util
    - info_util
    - zip_util 


# Contact 
Tmnguyen12@gmail.com 
