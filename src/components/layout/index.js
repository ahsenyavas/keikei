import Head from "next/head";
import Footer from "../footer";
import Navbar from "../navbar";
import Styles from "./index.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Demo Streaming</title>
        <meta name="description" content="Movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.root}>
        <Navbar />
        <div className={Styles.mainContainer}>
          <main className={Styles.main}>{children}</main>
        </div>

        <Footer />
      </div>
    </>
  );
}
