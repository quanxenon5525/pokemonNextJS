import Head from "next/head";
import Image from "next/image";
import { getPokemonDetail } from "../../../lib/pokemonAPI";
import { GetServerSidePropsContext } from "next";

//localhost:3000/details/[pokemonName]
export default function PokemonDetail({ pokemonDetail }: any) {
  return (
    <div>
      <Head>
        <title>Pokemon Profile</title>
      </Head>

      <div
        className="card"
        style={{
          maxWidth: "400px",
          marginTop: "50px",
          marginBottom: "10px",
          float: "none",
          margin: "0 auto",
        }}
      >
        <h1 className="text-4xl text-bold pt-4 text-center">
          {pokemonDetail.name.charAt(0).toUpperCase() +
            pokemonDetail.name.slice(1)}
        </h1>
        <h6 className="text-center">Weight: {pokemonDetail.weight}</h6>
        <Image
          className="card-img-top"
          width={350}
          height={450}
          alt={pokemonDetail.name}
          src={pokemonDetail.sprites.other["official-artwork"].front_default}
        />

        <div className="card-body">
          <div className="flex-col">
            {pokemonDetail.stats.map((statObject: any) => {
              const statName = statObject.stat.name;
              const statValue = statObject.base_stat;

              return (
                <div
                  className="flex items-stretch"
                  style={{ width: "500px" }}
                  key={statName}
                >
                  <h3 className="p-3 w-2/4">
                    {/* {statName}: {statValue} */}
                    {statName.charAt(0).toUpperCase() + statName.slice(1)}
                  </h3>
                  <div className="progress" style={{ maxWidth: "70%" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "25%" }}
                    >
                      {statValue}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pokemonName = context.query.pokemonName;
  const pokemonDetail = await getPokemonDetail(String(pokemonName));

  return {
    props: {
      pokemonDetail,
    },
  };
}
