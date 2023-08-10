import Link from "next/link";
import Image from "next/image";

export default function ListPokemon({ name, pokemonDetail }: any) {
  return (
    <Link
      href={`/details/${name}`}
      className="btn btn-warning"
      style={{
        minWidth: "250px",
        minHeight: "150px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Image
          alt={name}
          width={750}
          height={750}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeImage}.png`}
        /> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </Link>
  );
}
