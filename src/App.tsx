import React from 'react';
import { FileVault } from './pages/FileVault';


function App() {
  return (
    <div className="App">
      <FileVault signOut={() => null} />
    </div>
  );
}

export default App;
