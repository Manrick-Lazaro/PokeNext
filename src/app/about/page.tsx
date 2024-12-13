import Image from "next/image";
import charizard_image from "../../../public/images/charizard.png";
import styles from "../../styles/about.module.css";

export default function About(): JSX.Element {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>

      <p>
        O PokeNext é um projeto desenvolvido com o objetivo de explorar e
        aprender os conceitos fundamentais do framework Next.js. Ele apresenta
        um frontend moderno e funcional que consome dados diretamente da
        PokeAPI, uma API pública voltada ao universo Pokémon.
      </p>

      <p>
        Este projeto foi criado como uma iniciativa individual e tem um caráter
        acadêmico e open source. Ele busca não apenas demonstrar habilidades
        técnicas, mas também servir como um portfólio para contratantes e
        interessados em desenvolvimento frontend com Next.js.
      </p>

      <p>
        Ao acessar o PokeNext, você encontrará uma aplicação que combina
        aprendizado prático com a integração de APIs, oferecendo um exemplo
        claro do que é possível construir com Next.js.
      </p>

      <p>
        O código está disponível publicamente, incentivando outros
        desenvolvedores a explorarem, aprenderem ou até contribuírem para o
        projeto.
      </p>

      <Image
        src={charizard_image}
        height={300}
        width={300}
        alt="Charizard image"
      />
    </div>
  );
}
