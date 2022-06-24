import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";



const Posts = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log('conn_api')
        return res.json()
      })
      .then((res) => {
        setArticles(res)
        console.log('conn_api mise à jour');
      })
  }, [])

  return (
    <div>
      
      <p>{localStorage.getItem('title')}</p>
      <p>{localStorage.getItem('article')}</p>
      {articles.map((article) => {
        return (
          
          <Link to={`post/${article.id}`}>
            <h1 className="item">
              {article.title}
            </h1>
            <p>{article.body}</p>
            Afficher detaile
          </Link>
        )
      })}
    </div>
  )

}
export default Posts;