//import logo from './logo.svg';
import './App.css';
import React from "react";
import "./styles.css";
import NavBar from './routes/NavBar';
import Galleries from './routes/Galleries';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Uploads from './routes/Uploads';
import { Routes, Route } from "react-router-dom";
function App() {
  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="galleries" element={<Galleries />} />
          <Route path="post/:articleId" element={<Post />} />
      </Routes>
    </div>


  )

}

export default App;
