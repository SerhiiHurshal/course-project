import { AppProps, NextWebVitalsMetric } from 'next/app';

import { Layout } from '@components/layout/layout';
import '../styles/globals.scss';
import 'antd/dist/antd.css';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.mode === 'perfomance') {
    console.log(metric);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
