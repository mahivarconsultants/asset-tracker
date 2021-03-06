import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LoginPage from "./loginPage";
import AssetListView from "./assetListView";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Asset Tracker</title>
        <meta name="description" content="Asset Tracker" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <LoginPage />
    </div>
  );
}


