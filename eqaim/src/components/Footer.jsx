import React from 'react';
import styles from './components.module.css';
import { MdOutlineCreate } from "react-icons/md";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to='/blog'>
    <span>Write Blogs</span> <MdOutlineCreate size='50px'/> </Link>
    </div>
  )
}

export default Footer