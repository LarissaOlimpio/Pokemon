import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function ({ pokemon }) {
  return (
    <div className={styles.containerPokemons}>
     
      <h3>{pokemon.name}</h3>
    </div>
  );
}
{/*
 <Image
        src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png
 */}