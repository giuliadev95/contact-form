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

I chose this challenge to get familiar with CSS Grid. Here’s what I used:

- Semantic HTML5 markup
- CSS Grid
- Flexbox
- Mobile-first workflow
- JavaScript to apply different background colors to selected elements


### What I learned

1) CSS Grid responsive workflow
I followed a responsive, mobile-first approach while styling this contact form using CSS Grid:

	•	Initially, I assigned a “one-column grid layout” to the form (the parent element), allowing each child element to stretch across its own row on mobile screens.
	•	Then, I created a media query for tablets and laptops (min-width: 769px) and changed the grid layout of the form to “1fr 1fr,” meaning “two equal columns.” I applied the “grid-column: span 2” property to the children that needed to occupy the entire row, and the “grid-column: span 1” property to the children that should stay in just one of the two columns. I used “grid-column-start: 1” and “grid-column-end: 2” to adjust proportions, ensuring that adjacent children occupied exactly half of their row.

```css
/* Mobile screen */
form {
    display: inline-grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    row-gap: 1.25rem;
}

/* Tablets and laptops screen */
@media screen and (min-width:769px) {
    form {
        width: 37.5rem;
        grid-template-columns: 1fr 1fr;
    }

    .zero, .three, .four, .five, .six, .seven {
        grid-column: span 2;
    }
}
```

2) I used a function to change the background color of the radio buttons’ containers when selected:
```js
function addGreenBgtoGeneral() {
    if (GENERAL_BTN.checked) {
        GENERAL_BTN_CONTAINER.classList.add("green");
        SUPPORT_BTN_CONTAINER.classList.remove("green");
        console.clear();
        console.log(`${GENERAL_BTN.id} is checked.`);
        console.log(`${SUPPORT_BTN.id} isn't checked.`);
    }
}
```

3) 	3.	JavaScript for Displaying a Popup Message on Form Submission
This was an interesting challenge where I added a .show class to the popup message to make it visible. I also had to adjust the animation for how the message appeared and disappeared.

```js
POPUP.classList.add("show"); // Show popup msg
```
Then, is CSS:

```css
  #success_msg.show {
      display: flex;
      animation: fadeInOut 5s ease forwards;
  }
  
@keyframes fadeInOut {
    0% { opacity: 0; }
    10%, 90% { opacity: 1; }
    100% { opacity: 0; }
}

```


### Useful resources

- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand how CSS Grid works.

## Author

- Follow me on GitHub - [Giulia Moukouyou](https://github.com/giuliadev95/)
- My Frontend Mentor profile - [@yourusername](https://www.frontendmentor.io/profile/giuliadev95)
- Linkedin - [@yourusername](https://www.linkedin.com/in/giuliamoukouyou/)

