import { Transition } from "@headlessui/react";
import Image from "next/image";

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
  champion: Champion;
  champToGuess: Champion;
}

export default function Guess(props: Props) {
  const IMAGE_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/";
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="hover:cursor-pointer select-none text-input-text bg-gradient-to-b from-cell-light to-cell-dark p-0.5 hover:from-cell-light-hover hover:to-cell-dark-hover">
        <div
          className={`flex flex-col items-center w-80 text-center px-16 py-2 hover:brightness-90 ${
            props.champion === props.champToGuess
              ? "bg-cell-good"
              : "bg-cell-bad"
          }`}
        >
          <Image
            src={IMAGE_URL + props.champion.icon}
            alt={props.champion.name}
            width={60}
            height={60}
          />
          <p className="text-input-text">{props.champion.name}</p>
        </div>
      </div>
    </Transition>
  );
}
