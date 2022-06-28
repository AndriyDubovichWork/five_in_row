import React, { useState } from 'react';

import { RecoilRoot } from 'recoil';

import './App.css';

import Field from '../Field/Field';

function App() {
  const [userID, setUserID] = useState(0);
  const [users, setUsers] = useState(['✅', '❌']);
  return (
    <RecoilRoot>
      <Field
        height={10}
        width={10}
        userID={userID}
        users={users}
        setUserID={setUserID}
      />
    </RecoilRoot>
  );
}

export default App;
