import React from 'react';
import FileUpload from "./components/FileUpload";
import Student from './components/Student'

function App(props) {
  console.log('app his', props);
  return (
    <div className="container">
      <FileUpload />
      <Student {...props} />
    </div>
  );
}

export default App;
