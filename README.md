# 🌐 Leonardo Salles’ Interactive Portfolio

**Leonardo Salles’ Personal Portfolio** is an **interactive front-end web project** showcasing the developer’s skills, experience, and selected works. Built with **HTML5**, **CSS3**, **JavaScript (ES6+)**, **Bootstrap**, and **responsive design principles**, it features accessible navigation, animated content, and a project carousel.

The portfolio presents multiple projects, including interactive games and API-powered applications, with detailed descriptions, live previews, and links to GitHub repositories. **Animations** and **hover effects** enhance the **user experience**, while **semantic HTML** and **ARIA attributes** ensure **accessibility** across devices.

This project was developed as the **final capstone** for the **“Web Design for Everybody” specialization** offered by the **University of Michigan**, emphasizing responsive design, accessibility, dynamic UI, and front-end best practices.

---

## 📌 Features

- Fully responsive layout with semantic HTML5, CSS3, and custom variables for consistent theming
- Accessible navigation with open/close buttons, keyboard support, and ARIA attributes
- Animated hero and content sections with fade-in and slide-in effects
- Project display using cards on small and medium screens, switching to a Bootstrap carousel only on large screens (≥900px)
- Hover and focus effects on projects, links, and social icons to enhance user interaction
- Footer links to GitHub, LinkedIn, Instagram, and email for professional networking
- JavaScript-driven menu logic for opening/closing mobile navigation and collapsing menu after link click

---

## 📂 Project Structure

📁 src/
<br>
┣ 📂 css/ 
<br>
┃ ┣ 📄 style.css 
<br>
┃ ┗ 📄 reset.css 
<br>
┣ 📂 scripts/
<br>
┃ ┗ 📄 navigation.js  
📄 index.html

---

## 🧱 HTML Structure (index.html)

- Semantic layout with `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>`
- Responsive navigation menu with accessible open/close controls
- Hero section with descriptive `aria-label` and avatar image with meaningful `alt`
- About section with semantic headings and emphasis tags for clarity
- Project showcase with individual cards and a **Bootstrap** carousel
- Carousel enhanced with ARIA roles, labels, and hidden text for screen readers
- Footer with navigation links, social media icons, and accessible labels

### ✅ `aria-label` on navigation toggle buttons
```html
<button class="open-nav" aria-label="Open navigation" aria-expanded="false" aria-controls="main-navigation">&#9776;</button>
<button class="close-nav" aria-label="Close navigation">&times;</button>
```

**Purpose:** Provides descriptive labels for open/close menu buttons.

**Benefit:** Screen reader users understand the button function without relying on visual symbols.<br><br>

### ✅ `aria-controls` + `aria-expanded`
```html
<button class="open-nav" aria-label="Open navigation" aria-expanded="false" aria-controls="main-navigation">
```

**Purpose:** Associates the toggle button with the controlled navigation element and indicates expanded/collapsed state.

**Benefit:** Assists users relying on screen readers to know the menu state.<br><br>

### ✅ `aria-label` on hero section
```html
<section class="hero" id="home" aria-label="Hello! I am Leo Salles">
```

**Purpose:** Gives a meaningful description to the hero section.

**Benefit:** Helps screen reader users immediately identify the section context.<br><br>

### ✅ Descriptive `alt` attributes for images
```html
<img src="./assets/images/leo-avatar.png" alt="Minimalist avatar logo of a person with red hair, black glasses, and mustache inside a red circular frame, representing the project’s author.">
```

**Purpose:** Provides clear descriptions for each image.

**Benefit:** Ensures screen readers convey the visual meaning to users.<br><br>

### ✅ Carousel accessibility enhancements
```html
<div id="projects-carousel" class="carousel slide" aria-label="Projects showcase carousel">
  <div class="carousel-item active" role="group" aria-label="Project 2 of 4">
```

**Purpose:**
  - `aria-label` describes carousel's purpose.
  - `role="group"` + `aria-label` announces slide position (e.g., *Project 2 of 4*).

**Benefit:** Improves context for users navigating with assistive technologies.<br><br>

### ✅ Visually hidden text in carousel controls
```html
<span class="visually-hidden">Previous</span>
<span class="visually-hidden">Next</span>
```

**Purpose:** Ensures navigation controls are announced by screen readers.

**Benefit:** Users who cannot see icons still understand their function.<br><br>

### ✅ `aria-label` on external/social links
```html
<a href="https://github.com/leoosalles" aria-label="Visit Leonardo Salles' GitHub profile" target="_blank">
  <i class="fa-brands fa-square-github social-icon" role="img" aria-label="GitHub logo"></i>
</a>
```

**Purpose:** Explicitly describes the destination of each social media link.

**Benefit:** Prevents ambiguity for screen reader users by replacing vague labels like "link" with meaningful descriptions.<br><br>

---

## 🎨 CSS Styling – Key Rules

### `:root` with CSS Variables
```css
:root {
    --light-maroon: #cd6557;
    --mid-maroon: #b03119;
    --dark-maroon: #7f1e11;
    --light-pink: #fdf8f2;
    --mid-pink: #f8eae9;
    --dark-pink: #e8c1ba;
    --white: #fff;
    --shadow: #3e3e3e;
}
```

**Purpose:** Centralizes color definitions for consistent theming across the project.

**Benefit:** Improves maintainability and scalability—colors can be updated in one place and reflected globally.<br><br>

### `.nav` with transform/transition
```css
.nav {
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 100%;
    transform: translateX(0);
    transition: transform .3s ease;
}
```

**Purpose:** Implements an off-canvas navigation that slides into view when toggled.

**Benefit:** Enhances mobile usability by providing a clean, accessible menu that doesn't clutter the screen.<br><br>

### `.close-nav`
```css
.close-nav {
    position: absolute;
    padding: .25em;
    border: none;
    background: none;
    font-weight: 700;
    font-size: 3.5rem;
    cursor: pointer;
}
```

**Purpose:** Styles the close button for the off-canvas navigation.

**Benefit:** Makes the navigation dismissible with a clear, prominent button that is easy to interact with, especially on mobile devices.

**Explanation**:
  - `position: absolute;` allows the button to be placed independently of the normal document flow, making it possible to pin the close icon consistently to the top corner of the navigation panel without affecting other elements' layout.
  - This positioning ensures the button is always visible and accessible when the navigation is opened, which is crucial for usability and accessibility.
  - The combination of a large font size (`3.5rem`), bold weight (`700`), and clear cursor styling (`pointer`) emphasizes interactivity, signaling to users that this is the control to close the menu.<br><br>

### `.nav-link`
```css
.nav-link {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--dark-pink);
    transform: scale(1);
    transition-property: color, transform;
    transition-duration: .3s;
    transition-timing-function: ease-out;
}
```

**Purpose:** Defines the base appearance and smooth transitions for navigation links.

**Benefit:** Creates clear, readable navigation with animated feedback, enhancing both aesthetics and accessibility by ensuring changes are perceivable without being abrupt.<br><br>

### `.navigation-open`
```css
.navigation-open {
    transform: translateX(-100%);
}
```

**Purpose:** Controls the visible state of the mobile navigation.

**Benefit:** Provides a smooth and intuitive sliding animation that helps users clearly perceive when the navigation menu is being opened or closed.

**Explanation:**
  - This class is **dynamically toggled by JavaScript** in response to user interactions (e.g., tapping the hamburger or close button).
  - `transform: translateX(-100%);` shifts the navigation container completely out of the viewport, effectively hiding it without affecting the layout of other elements.
  - Compared to using `display: none`, this approach enables hardware-accelerated transitions, resulting in smoother animations and a more polished user experience.
  - By separating the visual state (`.navigation-open`) from the JavaScript logic, the implementation remains clean, scalable, and easier to maintain.<br><br>

### `.nav-link:hover, .nav-link:focus`
```css
.nav-link:hover,
.nav-link:focus {
    color: var(--white);
    transform: scale(1.2);
}
```

**Purpose:** Adds interactive feedback to navigation links through scaling and color change.

**Benefit:** Improves accessibility by providing clear visual cues for hover and keyboard focus states.<br><br>

### `.hero`
```css
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95dvh;
    font-family: "VT323", monospace;
}
```

**Purpose:** Centers hero content vertically and horizontally while using a distinctive monospace font.

**Benefit:** Creates a strong first impression with a retro aesthetic and clear visual hierarchy.<br><br>

### `@keyframes element-fade-in`
```css
@keyframes element-fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
```

**Purpose:** Defines a fade-in animation specifically for the hero section elements: `.main-title`, `.avatar`, and `.profession`.

**Benefit:** Creates a smooth, progressive appearance of elements, making transitions less abrupt and improving the overall user experience.

**Explanation:**
  - The animation gradually changes the element's `opacity` from `0` (completely transparent) to `1` (fully visible).
  - It is typically applied to elements when they first appear on screen (e.g., modal windows, navigation menus, or dynamically injected content).
  - This subtle animation helps users perceive changes in the interface more naturally, reducing cognitive load compared to sudden visibility changes.
  - By using `opacity` instead of properties like `display`, the animation leveraged hardware acceleration, resulting in smoother transitions with better performance.<br><br>

### `@keyframes left-to-right-welcome`
```css
@keyframes left-to-right-welcome {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    50% {
        transform: translateX(50%);
        opacity: .5;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
```

**Purpose:** Defines a left-to-right sliding fade-in animation for the `.welcome` element in the hero section.

**Benefit:** Provides a smooth, visually appealing entrance for the welcome message, guiding the user's attention and improving the perceived hierarchy of content. This prevents abrupt visual changes and enhances the overall user experience.

**Explanation:**
  - The animation moves the element from `translateX(-100%)` (offscreen left) to `translateX(0)` (its final position) while gradually increasing opacity from `0` to `1`.
  - At 50%, the element briefly overshoots to `translateX(50%)` with partial opacity (`0.5`), creating a subtle bounce effect that draws the eye.
  - This animation is applied explicitly to the `.welcome` paragraph inside the hero section.
  - By animating both position and opacity, the transition feels smooth and dynamic without affecting layout flow, enhancing visual feedback for users.<br><br>

### `.project-img:hover, .project-img:focus`
```css
.project-img:hover,
.project-img:focus {
    opacity: 100%;
    cursor: pointer;
}
```

**Purpose:** Highlights project images when interact with.

**Benefit:** Reinforces interactivity and ensures keyboard users (via `:focus`) get the same feedback as mouse users.<br><br>

### `@media (min-width: 768px)` (navigation & layout breakpoint)
```css
@media (min-width: 768px) {
    .open-nav,
    .close-nav {
        display: none;
    }

    .nav {
        position: initial;
        justify-content: flex-end;
    }

    .nav-list {
        flex-direction: row;
        justify-content: flex-end;
        gap: 2.25em;
        margin-top: 0;
    }
    /* ...additional desktop adjustments... */
}
```

**Purpose:** Switches navigation from off-canvas to a horizontal desktop manu.

**Benefit:** Adapts UI to larger screens, improving discoverability and reducing unnecessary controls on desktop.<br><br>

### `@media (min-width: 900px)` (carousel display logic)
```css
@media (min-width: 900px) {
    .project-card {
        display: none;
    }

    #projects-carousel,
    .carousel-description {
        display: block;
    }
    /* ...carousel description styles... */
}
```

**Purpose:** Hides stacked project cards and shows the **Bootstrap** carousel only on large screens.

**Benefit:** Provides an optimized presentation: card layout for small/medium screens and carousel for large screens.<br><br>

### Large-screen containers with focus/hover (≥1200px)
```css
@media (min-width: 1200px) {
    .about-me-container,
    .project-container {
        max-width: 1000px;
        border-radius: 1.5em;
        margin: 0 auto;
        padding: 2em;
        box-shadow: 0 15px 0 var(--shadow);
        transition: transform .5s ease, box-shadow .5s ease;
    }

    .about-me-container:hover,
    .project-container:hover,
    .about-me-container:focus-visible,
    .project-container:focus-visible {
        transform: scale(1.02);
        outline: none;
        box-shadow: 0 20px 0 var(--shadow);
    }
}
```

**Purpose:** Enhances large-screen containers with visual depth and keyboard-focus styles.

**Benefit:** Improves visual polish and ensures keyboard users receive the same focus feedback as mouse users.<br><br>

---

## 📱 JavaScript Logic – Mobile Navigation Toggle

### 1. Elements Selection

```js
const closeBtn = document.querySelector('.close-nav');
```

**Purpose:** Selects the element that closes the mobile navigation menu.

**Benefit:** Provides a reference to the close button so that event listeners can be attached, enabling users to dismiss the menu easily.<br><br>

```js
const openBtn = document.querySelector('.open-nav');
```

**Purpose:** Selects the element that opens the mobile navigation menu.

**Benefit:** Ensures the toggle button can be used to reveal the navigation menu, supporting smooth mobile navigation.<br><br>

```js
const navLinks = document.querySelectorAll('.nav-link');
```

**Purpose:** Selects all navigation link elements inside the menu.

**Benefit:** Allows each link to trigger menu closure when clicked, improving usability and preventing the menu from remaining open unnecessarily.<br><br>

```js
const nav = document.querySelector('.nav');
```

**Purpose:** Selects the mobile navigation container.

**Benefit:** Provide a reference to manipulate its CSS classes and ARIA attributes dynamically for accessibility and animation.<br><br>

### 2. Event Listeners

```js
closeBtn.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    nav.setAttribute('aria-expanded', 'false');
});
```

**Purpose:** Adds a click event listener to the close button. When clicked, it removes the class that makes the navigation visible and updates ARIA attributes.

**Benefit:** Smoothly hides the menu while informing assistive technologies that the menu is now collapsed, enhancing accessibility and visual feedback.<br><br>

```js
openBtn.addEventListener('click', () => {
    nav.classList.add('navigation-open');
    nav.setAttribute('aria-expanded', 'true');
});
```

**Purpose:** Adds a click event listener to the open button. When clicked, it adds the class that reveals the navigation menu and updates ARIA attributes.

**Benefit:** Provides users with clear visual feedback and screen reader context that the menu is expanded and accessible.<br><br>

```js
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('navigation-open');
        nav.setAttribute('aria-expanded', 'false');
    });
});
```

**Purpose:** Attaches a click event listener to each navigation link. Clicking a link closes the menu and updates the ARIA state.

**Benefit:** Ensures that users are returned to the main content after making a selection, maintaining usability and accessibility on mobile devices.<br><br>

---

📱 Responsive Design  
The layout adapts based on screen width:

| Screen Width       | Main Adjustments |
|--------------------|------------------|
| `< 768px`           | Mobile-first layout. Navigation works as an off-canvas panel controlled by `.open-nav` and `.close-nav`. Links are stacked vertically with larger font size for better tap targets. Projects are displayed as stacked cards. |
| `≥ 768px`           | Navigation is always visible as a horizontal menu; `.open-nav` and `.close-nav` are hidden. Typography scales up (e.g., `.main-title` to `4rem`). The **About Me** section uses a dark background with light text, larger fonts, and underline links. Projects switch to a two-column grid (`.project-card`). Footer gains dark background and interactive scaling hover effects on links and icons. |
| `≥ 900px`           | Project cards (`.project-card`) are hidden and replaced by the **carousel** (`#projects-carousel`). Carousel descriptions are displayed with increased padding and larger font size. A GitHub call-to-action button (`.github-cta-btn`) appears with hover/active scaling and shadow effects. |
| `≥ 1200px`          | Layout is centered with max-width containers. **About Me** and **Projects** sections gain borders, rounded corners, padding, and drop shadows, with hover/focus scaling effects. Footer content is constrained to `1000px` max-width for better readability on wide screens. |

---

## 🧪 Technologies Used  
- Semantic HTML5 — for accessible and well-structured markup, ensuring compatibility with assistive technologies  
- Modern CSS3 — using custom properties, responsive media queries, animations, and layout techniques like Flexbox and Grid  
- JavaScript (ES6+) — for handling navigation toggling, event listeners, accessibility attributes, and dynamic class manipulation  
- ARIA Attributes — to improve accessibility by synchronizing UI state (e.g., `aria-expanded`) with navigation visibility  
- Responsive Design — implemented with mobile-first principles and progressive enhancements for tablets and desktops  

---

## 🙋 About the Author

Developed by **Leonardo Salles de Oliveira**, a technology enthusiast with a passion for design, accessibility, clean code, and inclusive user interfaces.

💼 [LinkedIn](https://www.linkedin.com/in/leonardosalles/)
