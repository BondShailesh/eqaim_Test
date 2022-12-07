import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Blog from './Blog';
import styles from './blog.module.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://eqaim-test1.onrender.com/blogs")
      .then((r) => {
        console.log(r.data);
        let data = r.data.reverse()
        setBlogs(data)
        setLoading(false)
      })
  }, []);

  return (
    <div>
      {loading && <h1>Loading....</h1>}
      <div className={styles.blogSection}>
      {blogs.map((el) => (
        <Blog el={el} key={el._id}/>
      ))}
      </div>

    </div>
  )
}

export default Blogs