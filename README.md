# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/screenshots/success_msg%20dsk.png)


### Links

- Live Site URL: [See the Live Site here](https://responsive-contactform.netlify.app/)



## My process

### Built with

I chose this challenge to build it with the CSS Grid, so to get familiar with the model. I used:

- Semantic HTML5 markup
- CSS Grid
- Flexbox
- Mobile-first workflow
- JavaScript function to give different background to selected elements


### What I learned

1) CSS Grid responsive workflow

I followed a responsive mobile-first approach while styling this contact form with CSS Grid: 

- I gave an initial "1-column grid layout" to the form parent element, to each child of the form, along with a  "span of 2": this allowed every element to stretch in its row on mobile screens. 

- I created a media query for tablets and laptops (min-width: 769px) and changed the grid layout of the form parent element. I gave a "2-columns" layout and used the span = 2 property for the children who had to stay in 1 row, and the span = 1 property for those who had to stay just in their column (that is to say, a half of their row, span = 1). I matched span =1 with grid-column-start=1 and green-column-end=1 as it was the only way I managed to determine simmetry among the two halves of the row.

```css
/* mobile screen */
form {                                         /* parent grid layout */
    display: inline-grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    row-gap: 1.25rem;
  }

/* tablets and laptops screen */
  @media screen and (min-width:769px) {
    form {                                     /* changed parent grid layout */
          grid-template-columns: 1fr 1fr;
    }

    .zero, .three, .four, .five, .six, .seven { /* childrens' classes */
        grid-column-start: 1;
        grid-column-end: 2;
        grid-column: span 2;
    }
  }
```

2) JavaScript function to change the bg color of the radio buttons' field when selected

3) JavaScript function to display a popup message when the form gets submitted



### Useful resources

- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.



## Author

- Follow me on GitHub - [Add your name here](https://www.your-site.com)
- My Frontend Mentor profile - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Linkedin - [@yourusername](https://www.twitter.com/yourusername)

