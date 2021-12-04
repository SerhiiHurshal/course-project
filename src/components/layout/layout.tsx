import React, { FC } from 'react';

import { Button, Typography } from 'antd';
import Link from 'next/link';

const { Text } = Typography;

import styles from './layout.module.scss';

const Layout: FC = ({ children }) => (
  <div>
    <nav className={styles.nav}>
      <Link href='/'>
        <Button
          type='primary'
          shape='round'
          size='large'
          className={styles.navButton}
        >
          Home
        </Button>
      </Link>
      <Link href='/documentation'>
        <Button
          type='primary'
          shape='round'
          size='large'
          className={styles.navButton}
        >
          Documentation
        </Button>
      </Link>
      <Link href='/materials'>
        <Button
          type='primary'
          shape='round'
          size='large'
          className={styles.navButton}
        >
          Materials
        </Button>
      </Link>
      <Link href='/change-log'>
        <Button
          type='primary'
          shape='round'
          size='large'
          className={styles.navButton}
        >
          Change log
        </Button>
      </Link>
    </nav>
    <main className={styles.main}>{children}</main>
    <footer className={styles.nav}>
      <Text type='secondary'>&copy;Copyright since 2021</Text>
    </footer>
  </div>
);

export { Layout };
