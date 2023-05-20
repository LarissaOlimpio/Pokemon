import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
  return (
    <div className={styles.containerPokemons}>
      <div className={styles.cardPokemon}>
        
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width={130}
          height={130}
          alt={pokemon.name}
        />
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  )
}

{/*    `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`*/}