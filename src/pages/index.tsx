import { Fragment } from 'react';

import { Typography } from 'antd';
import Head from 'next/head';

import styles from '../styles/home.module.scss';

const { Title } = Typography;

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>

        <meta name='description' content='Home' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.titleWrapper}>
        <Title>WELCOME</Title>
        <Title>KEEP</Title>
        <Title>CALM</Title>
        <Title>and</Title>
        <Title>MAKE SERVER</Title>
        <Title>SECURE</Title>
      </div>
    </Fragment>
  );
}
