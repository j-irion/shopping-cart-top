import React from 'react';
import GitHubIcon from '../../assets/github.svg';
import styles from './root.module.css';

export default function root() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src='' alt='Logo' />
          <input
            type='search'
            name='searchbar'
            id='searchbar'
            className={styles.searchbar}
          />
          <div className={styles.headerLinkGroup}>
            <a href=''>Home</a>
            <a href=''>Store</a>
            <img src='' alt='Shopping Cart' />
          </div>
        </header>
        <footer className={styles.footer}>
          <img src='' alt='Logo' />
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
