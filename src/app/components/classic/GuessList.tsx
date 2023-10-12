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
    <div className="max-w-screen max-md:max-w-full max-md:overflow-x-scroll">
      <div className="flex flex-col items-center max-w-full max-md:max-w-md max-md:items-start">
        <div className="flex gap-1 my-2 h-10 text-input-text text-sm text-center leading-4">
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Champion
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Gender
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Position(s)
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Species
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Resource
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Range Type
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Region(s)
          </div>
          <div className="flex flex-col justify-center items-center border-b-2 border-input-text w-20">
            Release Year
          </div>
        </div>
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
    </div>
  );
}
