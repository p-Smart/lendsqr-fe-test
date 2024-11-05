import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Lendsqr Frontend Engineer Test</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default App;
