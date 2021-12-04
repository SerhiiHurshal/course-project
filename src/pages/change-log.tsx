import React, { Fragment, useState } from 'react';

import { Button, Input, Typography } from 'antd';
import Head from 'next/head';

const { Text } = Typography;

import styles from '../styles/change-log.module.scss';

const ChangeLog = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const heandleAddLog = () => {
    console.log('aaa');

    const currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();
    setLogs([...logs, datetime]);
  };

  console.log(logs);

  return (
    <Fragment>
      <Head>
        <title>ChangeLog</title>

        <meta name='description' content='ChangeLog' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div className={styles.buttonWrapper}>
          <Button
            type='primary'
            shape='round'
            size='large'
            onClick={heandleAddLog}
          >
            Add log
          </Button>
        </div>
        <div className={styles.logsWrapper}>
          {logs &&
            logs.map((log, i) => (
              <div key={log + i} className={styles.log}>
                <Text type='success'>{log}</Text>
                <Input size='large' />
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ChangeLog;
