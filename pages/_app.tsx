import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { resumeDetails } from "../constants"

function Portfolio({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>{resumeDetails.name}</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default Portfolio;
