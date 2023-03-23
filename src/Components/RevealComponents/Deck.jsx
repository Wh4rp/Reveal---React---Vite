import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import RevealOptions from './revealOptions';

export default function Deck({ options, children }) {
  useEffect(() => {
    Reveal.initialize({
      ...RevealOptions,
      ...options,
    });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
}
