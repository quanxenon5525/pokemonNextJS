/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { getPokemon } from "../../lib/pokemonAPI";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import ListPokemon from "../../components/ListPokemon";

export default function Home({ pokeList }: any) {
  const [filter, setFilter] = useState("");
  const searchFilter = (pokeList: any) => {
    return pokeList?.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const storageFilterPokemon = searchFilter(pokeList);

  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="charmander.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div>
          <img
            className="mw-100 card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Nothing to show"
          />
          <div className="card-body text-center">
            <h5 className="card-title ">Welcome to Pokedex</h5>
            <p className="card-text">
              This is pokemon list to help you find your favorite pokemon
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Input
              type="text"
              value={filter}
              autoComplete="off"
              id="pokemonName"
              placeholder="Search your favorite po..."
              onChange={(e) => setFilter(e.target.value)}
            />
            <h2 className="text-secondary mt-3">Pokemon Collection</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 15,
            }}
          >
            {storageFilterPokemon.map(({ name, index }: any) => {
              return <ListPokemon key={name} name={name} index={index} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const pokeList = await getPokemon();
  return { props: { pokeList } };
}
