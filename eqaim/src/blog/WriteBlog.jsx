import React, { useState } from 'react'
import styles from './blog.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WriteBlog() {
    const [blog, setBlog] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        let { name, value } = e.target
        setBlog({
            ...blog,
            [name]: value
        })
    }

    const handlePublish = () => {
        axios.post('https://eqaim-test1.onrender.com/blogs', { ...blog })
            .then((r) => {
                alert("Blog Published");
                navigate("/")
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <div className={styles.write}>
            <input
                onChange={(e) => handleChange(e)}
                name='title'
                type="text"
                placeholder='Blogpost Title'
                className={styles.title} />

            <textarea
                onChange={(e) => handleChange(e)}
                name='body'
                className={styles.blogBody}
                placeholder='Enter the discription' />

            <button onClick={handlePublish} className={styles.publishBtn}>Publish</button>
        </div>
    )
}

export default WriteBlog