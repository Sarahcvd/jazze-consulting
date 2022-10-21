import React from 'react';
import Image from 'next/image';
import styles from './Logos.module.css';

const Logos = () => {
  return (
    <article className={styles.article}>
      <a href='https://www.orkla.com/' target={'_blank'}>
        <Image src={'/../public/assets/orkla.png'} width={100} height={50} />
      </a>
    </article>
  );
};

export default Logos;
