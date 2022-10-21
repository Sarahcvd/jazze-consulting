import Image from 'next/image';
import React from 'react';
import styles from './Start.module.css';

const Start = () => {
  const handleClick = () => {
    alert('Jazz i veiiiii');
  };

  return (
    <div className={styles['start-container']}>
      <Image
        src={'/../public/cover.png'}
        width='1000px'
        height={'600px'}
        className={styles.image}
      />
      <article className={styles.content}>
        <h1 className={styles.title}>JC - Empowering businesses</h1>
        <p className={styles.text}>
          The strategy is what we do, results are what we deliver
        </p>
        <p className={styles.text}>Solve problems, change lives</p>
        <button onClick={handleClick} className={styles.button}>
          Get jazzed
        </button>
      </article>
    </div>
  );
};

export default Start;
