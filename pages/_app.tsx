import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from "next/head";
import {resumeDetails} from "../constants"

function Portfolio({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width user-scalable=no"/>
                <title>{resumeDetails.name}</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default Portfolio;
