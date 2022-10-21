import Image from 'next/image';
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <article className={styles.article}>
      <p>Who are we</p>
      <h1 className={styles.title}>See our employees</h1>
      <p className={styles.seperator} />
      <section className={styles.images}>
        <Image
          src={'/../public/kari.jpg'}
          width='547px'
          height='365px'
          className={styles.image}
        />
        <Image
          src={'/../public/eskil.png'}
          width='547px'
          height='365px'
          className={styles.image}
        />
        <Image
          src={'/../public/sarah.jpg'}
          width='240px'
          height='320px'
          className={styles.image}
        />
        <Image
          src={'/../public/marthe.png'}
          width='320px'
          height='320px'
          className={styles.image}
        />
        <Image
          src={'/../public/elsebeth.png'}
          width='512px'
          height='512px'
          className={styles.image}
        />
      </section>
    </article>
  );
};

export default About;
