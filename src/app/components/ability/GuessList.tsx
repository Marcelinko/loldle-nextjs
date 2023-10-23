import Guess from "./Guess";

interface Champion {
  name: string;
  gender: string;
  position: string[];
  species: string[];
  resource: string;
  range_type: string[];
  region: string[];
  release_year: string;
  icon: string;
}

interface Props {
  guesses: Champion[];
  champToGuess: Champion;
}

export default function GuessList(props: Props) {
  return (
    <div className="flex flex-col gap-2 items-center mt-2">
      {props.guesses
        .slice(0)
        .reverse()
        .map((champion: any) => (
          <Guess
            key={champion.name}
            champion={champion}
            champToGuess={props.champToGuess}
          />
        ))}
    </div>
  );
}
