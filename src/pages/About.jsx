import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>Sobre o projeto</h1>
      </div>
      <div className={styles.description}>
        <p>
          Pokedex é um App para consultar Pokémons.Este projeto foi construído
          em Next.js utilizando também React e as tecnologias bases do FronEnd
          como HTML5, CSS3 e JavaScript. Além disso para fazer a consulta dos
          pokemons foi utilizado a Api: PokeApi.
        </p>
        <p></p>
        <Image
          className={styles.image}
          src="/assets/pikachu.png"
          alt="Charizard"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
