import Image from "next/image";
import pokeballImg from "../../public/images/pokeball.png";
import styles from "../styles/home.module.css";

export default async function Home() {
  const maxPokemons = 250;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item: { id: number }, index: number) => {
    item.id = index + 1;
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={styles.title_container}>
        <Image src={pokeballImg} width={50} height={50} alt="PokeNext" />

        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
      </div>

      <div className={styles.pokemon_container}>
        {data.results.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </div>
  );
}
