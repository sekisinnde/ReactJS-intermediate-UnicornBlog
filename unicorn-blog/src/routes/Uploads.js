import React, { useState } from "react"
import "../styles.css";


const Uploads = () => {
   
  
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')

    const handleChangeOn = () => {
       localStorage.setItem('title',title)
       localStorage.setItem('article',article)
    }

    const handleSubmit = () => {
    
    }
    return (
        <form >
            <label for="title">Title</label>
            <input value={title} onChange={(event) =>setTitle(event.target.value)} className="title" type="text" name="title" />
            <input value={article} onChange={(event) =>setArticle(event.target.value)} className="article" type="text" name="Article" />
            <p>{localStorage.getItem('title')}</p>
            <p>{localStorage.getItem('article')}</p>
            <input onClick={handleChangeOn} className="click" type="submit" value="post" />
        </form>
    )
}
export default Uploads;