import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;
