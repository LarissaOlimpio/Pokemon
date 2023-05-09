import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
          <h1>Sobre o projeto</h1>
      </div>
      <div className={styles.description}>
          <p>Pokedex é um App para consultar Pokémons.Este projeto foi construído em Next.js utilizando as tecnologias bases do FronEnd como HTML5, CSS3 e JavaScript e consultas dos pokemons foi utilizado a Api: PokeApi</p>
          <p></p>
          <Image
            src="/assets/charizard.png"
            alt="Charizard"
            width="300"
            height="300"
          />
      </div>
    </div>
  );
}
