import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { HelloServer } from '@kewee/ui/server';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to skill-view!</title>
      </Head>
      <main className="app">
        <HelloServer />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
