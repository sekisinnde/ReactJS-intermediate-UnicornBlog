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
  
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.title.toLowerCase();
      return postName.includes(query);
    });
  };

  return (
    <div>
      <input type="text" id="header-search" placeholder="Search blog posts" name="s" />
      <p>{localStorage.getItem('title')}</p>
      <p>{localStorage.getItem('article')}</p>
      
      {articles.map((article, index) => {
        return (
         <>
          <Link to={`post/${article.id}`}>
            <h1 key={index} className="item">
              {article.title}
           </h1>
           </Link>
            <p key={index}>{article.body}</p>
            Afficher detaile
        
            </>

        
          // <Link to={`post/${article.id}`}>
          //   <h1 key={index} className="item">
          //     {article.title}
          //   </h1>
          //   <p key={index}>{article.body}</p>
          //   Afficher detaile
          // </Link>
        )
      })}
      
    </div>
    
  )

}
export default Posts;