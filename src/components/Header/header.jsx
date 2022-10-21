import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

import jclogo from '../../../public/assets/jclogo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={jclogo}
        className={styles.logo}
        width={50}
        height={50}
        alt='logo'
      />
      <p style={{ color: 'white' }}>Jazze Colsulting</p>
    </header>
  );
};

export default Header;
