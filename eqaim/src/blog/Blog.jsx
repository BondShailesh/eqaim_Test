import React from 'react'
import { Link } from 'react-router-dom';
import styles from './blog.module.css';

function Blog({ el }) {
    return (
        <div key={el._id} className={styles.blog}>
            <Link to={`/blogone/${el._id}`} className={styles.linkpara}>
                <h3 className={styles.blogHead}>{el.title}</h3>
                <p className={styles.blogDescrip}>{el.body}</p>
            </Link>
        </div>
    )
}

export default Blog