import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import page1 from './program/contact'; 
import page2 from './program/contact-end';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route expect path='/' Component={page1} />
          <Route exact path="/page2" Component={page2} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
