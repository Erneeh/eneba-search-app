import Card from "./Card";

export default function Grid({ games }) {
    return(
      <div className="
      mt-6 grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      gap-6
    ">
      {games.map(game => (
        <Card key={game.id} game={game} />
      ))}
    </div>
    )
}