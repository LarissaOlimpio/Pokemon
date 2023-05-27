import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <div className={styles.cardPokemon}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={130}
        height={130}
        alt={pokemon.name}
      />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <div className={styles.link}>
        <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
      </div>
    </div>
  );
}

{
  /*    `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`*/
}
