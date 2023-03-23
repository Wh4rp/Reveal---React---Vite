import React from 'react';

import Deck from './Components/RevealComponents/Deck';
import Slides from './Slides';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Deck>
        <Slides />
      </Deck>
    </div>
  );
}

export default App;