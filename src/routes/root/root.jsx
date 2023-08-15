import React from 'react';
import GitHubIcon from '../../assets/github.svg';
import Logo from '../../assets/logo.png';
import styles from './root.module.css';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={Logo} alt='Logo' />
          <input
            type='search'
            name='searchbar'
            id='searchbar'
            className={styles.searchbar}
          />
          <div className={styles.headerLinkGroup}>
            <Link to='../?index'>Home</Link>
            <Link to='../store'>Store</Link>
            <Link to='../cart'>
              <img src='' alt='Shopping Cart' />
            </Link>
          </div>
        </header>
        <Outlet />
        <footer className={styles.footer}>
          <img src={Logo} alt='Logo' />
          <a
            href='https://github.com/j-irion'
            className={styles.gitHubContainer}
          >
            j-irion
            <img src={GitHubIcon} alt='GitHub' className={styles.gitHubIcon} />
          </a>
        </footer>
      </div>
    </>
  );
}
