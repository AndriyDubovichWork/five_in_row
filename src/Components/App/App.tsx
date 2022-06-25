import React from 'react';

import { RecoilRoot } from 'recoil';

import './App.css';

import Field from '../Field/Field';
import Settings from '../Field copy/Settings';

function App() {
  return (
    <RecoilRoot>
      <Settings />
      <Field />
    </RecoilRoot>
  );
}

export default App;
