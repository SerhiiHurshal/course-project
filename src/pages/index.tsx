import { Fragment } from 'react';

import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Starter Pack</title>

        <meta name='description' content='Starter Pack' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Fragment>
  );
}
