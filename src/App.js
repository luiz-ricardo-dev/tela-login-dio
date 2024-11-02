import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/home/index';
import { Login } from './pages/login/index';
import { Feed } from './pages/feed'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/feed' element={<Feed></Feed>} />
        </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
