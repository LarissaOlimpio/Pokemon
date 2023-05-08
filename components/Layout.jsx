import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Nossa Pokédex (palavra comum no vocabulário dos amantes de Pokémon)é uma enciclopédia virtual que contém várias espécies de pokémon."
        />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
