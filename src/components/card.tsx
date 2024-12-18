import { Pokemon } from "@/types/pokemon";
import styles from "@/styles/card.module.css";
import Image from "next/image";
import Link from "next/link";

type CardProp = {
  pokemon: Pokemon;
};

export function Card({ pokemon }: CardProp): JSX.Element {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        width={150}
        height={150}
      />
      <p className={styles.id}>{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.button}>
        Detalhes
      </Link>
    </div>
  );
}
