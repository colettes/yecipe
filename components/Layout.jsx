import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colette Smith</title>
        <meta name="description" content="Colette's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <a href="/" className={styles.title}>
          Yesipe
        </a>
        <Navigation />
        {props.children}
      </main>
    </div>
  );
}
