import React, { Fragment, useRef, useState } from 'react';

import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/documentation.module.scss';

export default function Materials() {
  const input = useRef<HTMLInputElement>(null);
  const [filesCount, setFilesCount] = useState<
    { name: string; size: number; link: string }[]
  >([]);

  const onFileUpload = async () => {
    if (input?.current) {
      const files = input.current.files;

      if (files?.length) {
        const buffer = await files[0].arrayBuffer();

        const base64 = new Buffer(buffer).toString('base64');

        const link = `data:${files[0].type};base64,${base64}`;

        setFilesCount([
          ...filesCount,
          { name: files[0].name, size: files[0].size, link },
        ]);
      }
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Materials</title>

        <meta name='description' content='Materials' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div className={styles.buttonWrapper}>
          <Button type='primary' shape='round' size='large'>
            Upload file
          </Button>
          <input
            id='file-upload'
            type='file'
            className={styles.downloadButton}
            ref={input}
            onChange={onFileUpload}
          />
        </div>
        {filesCount && (
          <div className={styles.filesTable}>
            {filesCount.map((file, i) => {
              const size = Math.round(file.size / 10000) / 100;
              return (
                <div key={i} className={styles.file}>
                  <a download={file.name} href={file.link}>
                    <Image src='/blank-file.png' width={100} height={100} />
                  </a>
                  <p>{`${file.name} ${size}MB`}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
}
