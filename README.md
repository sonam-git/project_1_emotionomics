## Table of contents
* [Emotionomics](#emotionomics)
* [How to use](#how-to-use)
* [Credits](#credits)
* [License](#license)
* [Screenshots](#screenshots)

## Emotionomics

In the last 24 hours, has either of these things happen to you?
* Did your obscure cryptocurrency finally, after 12 years, gain value and skyrocket from $0.10/coin to $50,000/coin?
* Did your cryptocurrency fall from $60,000/coin to $10,000/coin, a loss of 500%?

Welcome to Emotionomics!
Our goal is to allow the user to track the %change of a selected coin, and accordingly deliver a GIF to help guide how they should feel.
By tracking the live value of the selected coin, we calculate the %loss or %gain over the last 24 hours and randomly select the appropriate GIF.

## How to use 

Simply access the website through this link: ___ 
Once on the front page, just drop the "select coin" menu to find the list of coins and select the coin the user would like to track. 
Once a coin is selected, the user should see the %change of the coin and whether they should be happy or sad!


## Technologies Used
* HTML
* CSS
* JavaScript
* JQuery
* Day.js
* Server side API 

# 3rd party resources:
* Bulma (https://bulma.io/)
* Giphy API (https://developers.giphy.com/)
* Coinranking API by Coinranking on RapidAPI (https://rapidapi.com/Coinranking/api/coinranking1)

# Build Status
 This project have been developed from Scratch.

# code Style

## HTML
* Created index.html file
* Linked css file & javascript file in the head & bottom of body section respectively.
* Header section includes Navbar & Logo.
* Main section include Hero image, div to display user data and get user input and div to hold and display dynamically created buttons.
* Buttons are wrapped into the div, which interact with the user to get & insert data. 
* Hidden modal elements for about us, contact us, our team and sign up, which render in the page according to the JS function.
* Footer section includes copy right text.

## CSS
* Used Bulma CSS framework for modal,navbar, and dropdown.
* Responsive in smaller screen both content and navbar( changed into dropdown)
* Added reset.css file.
* Added border radius to the boxes and buttons for better UI/UX
* Mostly use flexbox properties & Overall user friendly. 

## JavaScript / JQuery
* app.js file constructed with pure javascript where modal.js and navbar.js constructed with both JS &  jQuery.
* Decleared variables as needed
* Created a function to load user input data stored in the local storage 
* Created a function to save the user input in the local storage.( coin change value & email id)
* Used 2 api key one for coin data and another for giphy, where the value of coin change is high (+) = happy giphy, and low (-) = sad giphy. 
* App.js file includes a function to  fetch data from api call, display coin name and value, save and display those coin value in local storage or clear     from it, happybutton and sad button function to create giphy according to the coin change value, and clear giphy function to clear the window.
* App.js file focused on display dynamically created html element from user input or out respectively.
* Modal.js file contains the modal to display the content for about us/ contact us/ our team/ sign up which also includes the function to save user email   into local storage.
* navbar.js file contains the function to make the hamburger button for small screen, which also includes the function to display the animated heading.
* click event listener function has been added bottom of the file for each user input or interaction for all three files.


## Credits

Our team:
* Dandar Ganbold
* Sonam J Sherpa
* Walter Craigie
* Yung in Shin
* Kaleo Dutta-allen


## License

MIT License

Copyright (c) [2023] [Emotionomics]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Screenshots

* Desktop view with coin select dropdown.
![Screenshot 2023-04-02 at 10 13 47 PM](https://user-images.githubusercontent.com/89502092/229417276-fd48ce5e-3b8f-45f0-918a-4fbb545cbea4.png)

![Screenshot 2023-04-02 at 10 06 53 PM](https://user-images.githubusercontent.com/89502092/229416835-e9f09346-52be-45ab-9e41-83bd9f433566.png)


* Desktop view of  GIF being displayed.
<img width="1439" alt="Screenshot 2023-04-02 at 10 07 41 PM" src="https://user-images.githubusercontent.com/89502092/229416929-4878b216-2fb8-4e61-a140-e8a5fe4a417c.png">

* Mobile view of front page.

![Screenshot 2023-04-02 at 10 08 38 PM](https://user-images.githubusercontent.com/89502092/229416996-7c0e899c-a3d5-453e-8661-2ec987b49548.png) ![Screenshot 2023-04-02 at 10 09 23 PM](https://user-images.githubusercontent.com/89502092/229417010-3872b3b3-a93b-41eb-927f-9741618e684c.png)


* Mobile view with NAV dropdown burger menu open.

![Screenshot 2023-04-02 at 10 08 57 PM](https://user-images.githubusercontent.com/89502092/229417036-6c15b156-c6a2-4f0f-880d-fc141323930d.png)



# Team Github URL: 
(https://github.com/Daganbold/emotionomics-p1)

# Deployed Live URL: 
  https://sonam-git.github.io/project_1_emotionomics/
