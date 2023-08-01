import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export default function ListPokemon({ name }: any) {
  return (
    <div
      className="card bg-warning"
      style={{ minWidth: "250px", marginTop: "15px", border: "1px solid " }}
    >
      <Link href={`/details/${name}`} className="btn btn-warning">
        {/* <Link href={`detail/${name}`} className="btn btn-warning"> */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </Link>
    </div>
  );
}
