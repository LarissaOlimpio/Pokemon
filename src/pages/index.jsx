import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '@/src/components/Card'
import pokeball from '../../public/assets/pokeball.png'
import pokedexName from  '../../public/assets/pokedexName.png'


export async function getStaticProps() {
  const maxPokemon = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemon}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}
export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.header}>
        <Image
          src={pokeball}
          alt="pokeballImage"
          className={styles.imagePokeball}
        />
         <Image
          src={pokedexName}
          alt="pokedexNameImage"
          className={styles.pokedexName}
        />
      </div>

      <div className={styles.containerPokemons}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  )
}
