# Reveal.js + React + Vite

This is a template for creating presentations with [Reveal.js](https://revealjs.com/) and [React](https://reactjs.org/) using [Vite](https://vitejs.dev/).

## Getting started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Deploy to GitHub Pages
pnpm deploy
```

Note: for the deploy to work, you need to change the `base` in `vite.config.js` to your GitHub repository name.

## Adding slides

The slides are located in `src/Slides/`. The `index.jsx` file is the entry point for the slides. For add a new slide, create a new file in the `src/Slides/` directory. Example:

```jsx
// src/Slides/MySlide.jsx
import React from 'react';
import Slide from '../Components/RevealComponents/Slide';

export default function MySlide() {
  return (
    <Slide>
      <p>This is a Slide</p>
    </Slide>
  );
}
```

Import it in `index.jsx` and add it into the `Slides` like this:

```jsx
// src/Slides/index.jsx
import React from 'react';
import OtherSlide from './OtherSlide';
import MySlide from './MySlide';

export default function Slides() {
  return (
    <>
      <OtherSlide />
      <MySlide />
    </>
  );
}
```

Based in this [repository](https://github.com/NatKarmios/gillian-debugger-presentation) and [this other](https://github.com/Kat-Codes/building-talks-with-reveal.js).
