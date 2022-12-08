import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreatePost from './pages/posts/CreatePost';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
