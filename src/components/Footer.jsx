import Image from 'next/image'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.divFooter}>
      <p>Desenvolvido por Larissa Olimpio</p>

      <a
        href="https://github.com/LarissaOlimpio"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/logoGitHub.svg"
          width={25}
          height={25}
          alt="ícone Github"
          className={styles.icon}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/larissaolimpio/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/logoLinkedin.svg"
          width={25}
          height={25}
          alt="Ícone Linkedin"
          className={styles.icon}
        />
      </a>
    </div>
  )
}
