import type { Pokemon } from "@/types/pokemon";

type PokemonProps = {
  params: { id: string };
};

export default async function Pokemon({
  params,
}: PokemonProps): Promise<JSX.Element> {
  const { id } = await params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  console.log(data);

  return (
    <>
      <h1>deu certo</h1>
    </>
  );
}
