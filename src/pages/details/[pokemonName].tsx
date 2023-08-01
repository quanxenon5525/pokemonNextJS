import Head from "next/head";
import { getPokemonDetail } from "../../../lib/pokemonAPI";
import { PokemonImage } from "../../../components/ui/PokemonImage";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

//localhost:3000/details/[pokemonName]
export default function PokemonDetail({ pokemonDetail }: any) {
  console.log(pokemonDetail);
  if (!pokemonDetail) {
    return <div>404</div>;
  }
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
        <img
          className="card-img-top"
          src={pokemonDetail.sprites.front_default}
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
                    {statName}: {statValue}
                  </h3>
                  {/* <Progress className="w-2/4 m-auto" value={statValue} /> */}
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
