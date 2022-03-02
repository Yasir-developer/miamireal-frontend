import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import { Button } from '@material-ui/core'
import { useWeb3 } from "@3rdweb/hooks" 


const Header = () => {
  const { connectWallet, address, error } = useWeb3();

  console.log('error', error)
  console.log('address', address)

  const getAddress = () => {
    return <p className={styles.address_field}>{address}</p>
  }

  const buttonHandler = () => {
    connectWallet("injected") 
  }

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
            { address && getAddress() }
            { !address && <Button variant="contained" color="primary" onClick={()=>buttonHandler()}>Connect Meta Mask</Button>}

          </div>
          
          
        </div>
      </div>
    </nav>
  )
}

export default Header