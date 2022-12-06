import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import styles from './components.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
    <Link to='/' className={styles.heading}>
      <h1 >Eqaim Blog</h1> 
      </Link>
    </div>
  )
}

export default Navbar