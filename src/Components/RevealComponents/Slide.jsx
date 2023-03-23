import React from 'react';

const Slide = ({ children, transition = 'slide' }) => (
  <section data-transition={transition}>{children}</section>
);

export default Slide;