import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const colors = ["#09ff00", "#ff00db", "#77ACF1", "#000000", "#3EDBF0"];
  const [currentColor, setcurrentColor] = React.useState(colors[0]);
  const [current, setCurrent] = React.useState(0);
  const [speed, setSpeed] = React.useState(500);

  const color = () => {
    const index = Math.floor(Math.random() * colors.length);
    setcurrentColor(colors[index]);
  };

  React.useEffect(() => {
    setTimeout(() => {
      color();
      setCurrent(current + 1);
    }, speed);
  }, [current]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jaycob.eth</title>
        <meta name="description" content="WWW" />
      </Head>

      <main style={{ backgroundColor: currentColor }} className={styles.main}>
        <img style={{ width: "40%" }} alt="Jaycob" src="/jaycobs-logo.svg" />
        <span
          style={{
            border: "1px solid #ffffff",
            color: "#ffffff",
            marginTop: "30px",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onMouseEnter={() => setSpeed(50)}
          onMouseLeave={() => setSpeed(500)}
        >
          jaycob.eth
        </span>
      </main>
    </div>
  );
}
