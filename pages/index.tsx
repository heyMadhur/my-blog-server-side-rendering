import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import utilStyles from "@/styles/Utilities.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC= () => {
  return (
    <>
      <Head>
        <title>Bloggers Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.MainClass}>
        <div className={styles.Heading}>
          <img src='/MyPhoto.jpeg' alt="Profile Pic" width={100} height={100} className={styles.myImg}></img>
          <h1 className={utilStyles.headFont}>Madhur Gupta</h1>
          <p className={utilStyles.textFont}>
            Hey there! I am Madhur Gupta. I am a Pro Level Developer +
            Billionare + Philanthropist and much more!!!
          </p>
        </div>

        <div className={styles.blogs}>
          <h2 className={utilStyles.headFont}>Popular Blogs</h2>
          <div className={styles.blogItems}>
            <h3 className={utilStyles.headFont}>How to have Clear Thoughts</h3>
            <p className={utilStyles.textFont}>
              Stop Consuming Motivation!!&nbsp; Start Doing Meditation... Follow
              Discipline
            </p>
          </div>
          <div className={styles.blogItems}>
            <h3 className={utilStyles.headFont}>How to Become Self Made Millionare</h3>
            <p className={utilStyles.textFont}>Go and start working on any project you find....</p>
          </div>
          <div className={styles.blogItems}>
            <h3 className={utilStyles.headFont}>How to Become Pro Coder</h3>
            <p className={utilStyles.textFont}>Practice DSA and make projects</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
