import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginPage from "./loginPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asset Tracker</title>
        <meta name="description" content="Asset Tracker" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <LoginPage/>
    </div>
  );
}
