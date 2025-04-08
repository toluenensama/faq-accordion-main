# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview


In This FAQ accordion challenge, I was tasked with making this accordion responsive, and interactive. I went a bit further by making the answers interactive using JS
### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/design/Screenshot-1.png)
![](/design/Screenshot-2.png)
![](/design/Screenshot-3.png)



## My process
I started by building a node project installing Tailwind CSS, Vite and jQuery.
Then I built is with mobile-first workflow (thats how Tailwind works).
Then I used jQuery to hide and show answers using fadeToggle().
also used some vanila css to customize somethings

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Tailwind CSS](https://tailwindcss.com/)- Tailwind CSS
- Mobile-first workflow
- [jQuery](https://api.jquery.com/)-jQuery
- [Vite](https://vite.dev/)
- [node](https://nodejs.org/en)



### What I learned

- Learnt how to use Tailwind better, using cool and customizable UI

```html
<p class="font-work-semibold md:text-md hover:text-purple-800" id="quest-one">What is Frontend Mentor, and how will it help me?</p>
```
  Customized the font using a local TTF file which is a new skill for me, now i can use many fonts I'd like without working offline
```css
@font-face {
    font-family: Work-sans-bold;
    src: url(/assets/fonts/static/WorkSans-Bold.ttf);
    font-weight: bold;
}

@theme {
    --font-work-bold: Work-sans-bold;
    --font-work-semibold: Work-sans-semibold;
    --font-work-regular: Work-sans-regular;

}

```
Also made some @layers tags which was new and I am sure would be useful in the future.
creating this class made it possible to combine multiple tailwind classes

```css


@layer components {
    .faq-ans {
        @apply font-work-regular text-stone-500;
    }
}


```

I was also able to incoperate jQuery in a node vite project withich is pretty cool.
the `script` tag was added at the head. And was imported using

```js
import $ from 'jquery';
window.jQuery = window.$ = $;
```


# Author
Ojo Toluwalogo Daniel