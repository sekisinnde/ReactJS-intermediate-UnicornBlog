import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from "react";
import Galleries from './Galleries';
import Accueille from './Accueille';
import Posts from './Posts';
import Uploads from './Uploads';
import "./styles.css";

function App() {
  const [articles, setArticles]= useState([])
    
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log('conn_api')
            return res.json()
        })
        .then((res)=>{
          setArticles(res)
            console.log('conn_api mise à jour');
        })
    }, [])
  return (
    <div className="App">
      <Accueille />
      <ul>
        {articles.map(article => (
          <li key={article.title}>
            {article.title}
          </li>
        ))}
      </ul>
        
       
   </div>
  
 
  )
   
}

export default App;
