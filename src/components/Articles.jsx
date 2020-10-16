import React, { useState,useEffect } from 'react'
import loader from '../three-dots.svg'
import './Articles.css'


function Articles() {
  const [articles , setArticles] =useState([])

  useEffect(()=>{
    setTimeout( async ()=>{
      const res =await fetch("https://jsonplaceholder.typicode.com/posts") 
      const data = await res.json()
      setArticles(data.slice(0,10))
    },3000)
  },[])

  

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles && articles.map(({id, body, title})=>(
        <div key={id} className="articles__post">
        <h3>{title}</h3>
        <p>{body}</p>
        </div>
      ))}

      {articles.length===0 && <img src={loader} className="articles__loader" alt="loader"></img>}
    </div>
  )
}

export default Articles
