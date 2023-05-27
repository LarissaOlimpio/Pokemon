import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";
import Button from "@/src/components/Button";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false, //false para retornar apenas o número máximo de pokemons que foi definido em maxPokemons
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};
export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.container}>
      <div className={styles.divPokemon}>
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width={150}
          height={150}
          alt={pokemon.name}
        />
        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.typeContainer}>
            {pokemon.types.map((item, index) => (
              <span key={index} className={`${styles.type} ${styles['type_'+ item.type.name]}`}> {/* Classe dinâmica */}
                {item.type.name}
              </span>
            ))}
          </div>
          <div className={styles.dataContainer}>
            <div >
              <h4>Altura:</h4>
              <p>{pokemon.height * 10} cm</p>{" "}
              {/*multiplicando por10 por que vem em decimetro*/}
            </div>
            <div>
              <h4>Peso:</h4>
              <p>{pokemon.weight / 10} kg</p>{" "}
              {/*Dividino por 10 para ser em  kilo*/}
            </div>
      </div>
        </div>
        <Button href ={"/"}>Voltar</Button>
      </div>
    </div>
  );
}
