import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



const Post = ()=>{
    let params = useParams();
    const [article, setArticle] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.articleId}`)
      .then((res) => {
        console.log('conn_api')
        return res.json()
      })
      .then((res) => {
        setArticle(res)
        console.log(res);
      })
  }, [])
  
    return (
    <h2>Post:<h1 className="item">
    {article.title}
    </h1>
    <p>{article.body}</p>
    </h2>);

}
export default Post;