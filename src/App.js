import React from 'react';
import Toasting from './components/toast';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Form from './components/form';
function App() {
  return (
    <div>
      <Toasting />
      <Form />
    </div>
  )
}

export default App
