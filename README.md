# Reveal.js + React + Vite

This is a template for creating presentations with [Reveal.js](https://revealjs.com/) and [React](https://reactjs.org/) using [Vite](https://vitejs.dev/).

## Getting started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

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

import it in `index.jsx` and add it to the `Slides` like this:

```jsx
// src/Slides/index.jsx
import React from 'react';
import MySlide from './MySlide';

export default function Slides() {
  return (
    <>
      <MySlide />
    </>
  );
}
```

Based in this [repository](https://github.com/NatKarmios/gillian-debugger-presentation) and [this other](https://github.com/Kat-Codes/building-talks-with-reveal.js).
