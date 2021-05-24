import Head from "next/head";
import Image from "next/image";
import Login from "../components/login";
import styles from "../styles/Home.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <Login />
    </div>
  );
}
