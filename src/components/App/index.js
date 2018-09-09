// Core
import React from 'react';

// UI
import style from './style.scss';

// Examples
import Demo from '../Demo';

// Predefined Rules & Accessor Data
import accessor from '../../constants/accessor.json';
import higherOrderRule from '../../constants/higherOrderRule.json';

import jsonLogicJs from 'json-logic-js'

const App = () => (
  <div className={style.App}>
    <div className={style.Content}>
      <Demo
        title="with Accessor"
        value={JSON.parse('{"===":[1,{"var":["test",1]}]}')}
        data={JSON.parse('{"var":["z", 26] }')}
      />
    </div>
  </div>
);

export default App;
