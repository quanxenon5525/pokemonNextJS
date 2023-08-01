import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import BackgroundList from "../../components/BackgroundList";
import ListPokemon from "../../components/ListPokemon";
import { Input } from "../../components/ui/input";
import { getPokemon } from "../../lib/pokemonAPI";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ list }: any) {
  const [filter, setFilter] = useState("");
  const searchFilter = (list: any) => {
    return list.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const storageFilterPokemon = searchFilter(list);

  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="charmander.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <BackgroundList />
        <Input
          type="text"
          value={filter}
          autoComplete="off"
          id="pokemonName"
          placeholder="Search your favorite po..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <h2 className="text-secondary mt-3">Pokemon Collection</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
          }}
        >
          {storageFilterPokemon.map(({ name, url }: any) => (
            <ListPokemon key={name} name={name} url={url} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const list = await getPokemon();
  return { props: { list } };
}
