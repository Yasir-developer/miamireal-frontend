import React from 'react'
import Link from 'next/link'
import main_styles from '../../styles/Home.module.scss'
import styles from '../../styles/Header.module.scss'
import { Button } from '@material-ui/core'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)">Miami Real</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link href="/">
                <a className={styles.nav_link}>Home</a>
              </Link>
              <Link href="/faqs">
                <a className={styles.nav_link}>NFTs</a>
              </Link>
              <Link href="/faqs">
                <a className={styles.nav_link}>Faqs</a>
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Button variant="contained" color="primary">Connect to Meta</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header