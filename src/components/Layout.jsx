import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import { HeroPattern } from './HeroPattern'

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
      <HeroPattern className={styles.heroPattern} />
      <Navbar />
      <main className={styles.main}> {children} </main>
      <Footer />
    </>
  )
}
