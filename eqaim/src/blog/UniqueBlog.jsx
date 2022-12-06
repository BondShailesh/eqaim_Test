import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './blog.module.css';

function UniqueBlog() {
    const [blog, setBlog] = useState("")
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/blogs/${id}`)
            .then((r) => {
                setBlog(r.data[0])
            })
    }, [])

    return (
        <div className={styles.uniqueBlog}>
            <h2>{blog.title}</h2>
            <p className={styles.uniqueBlogDes}>{blog.body}</p>
        </div>
    )
}

export default UniqueBlog