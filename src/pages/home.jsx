import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '@/components/Card'

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
          src="/assets/pokeball.png"
          width={70}
          height={70}
          alt="pokeball"
        />
        <h1>Pokedex</h1>
      </div>

      <div className={styles.containerPokemons}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  )
}
