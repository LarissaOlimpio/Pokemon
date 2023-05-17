import styles from '../styles/Global.module.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <section className={styles.global}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </section>
    </>
  )
}
