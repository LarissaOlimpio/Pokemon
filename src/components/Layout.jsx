import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'


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
     
        <div className={styles.background}></div>
        <Navbar />
        <main className={styles.main}> {children} </main>
        
        <Footer />
        <div className={styles.attribute}>
          <p ><a href="https://www.freepik.com/free-vector/blue-stylish-halftone-comic-zoom-background_17995618.htm#query=pokemon&position=5&from_view=search&track=sph">Image by vector_corp</a> on Freepik</p>
        </div>
       
     
    </>
  )
}
