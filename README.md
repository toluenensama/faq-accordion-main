# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview


In This FAQ accordion challenge, I was tasked with making this accordion responsive, and interactive. I went a bit further by making the answers interactive using JS
### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

