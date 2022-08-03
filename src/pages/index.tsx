import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "./components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Odonto Clean</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
};

export default Home;
