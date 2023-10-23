"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

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

interface Ability {
  image: {
    full: string;
  };
  description: string;
  name: string;
}

interface Props {
  abilities: Ability[];
  abilityToGuess: number;
  newGame: Function;
  champion: Champion;
  image: string;
}

export default function GameOver(props: Props) {
  const CHAMPION_IMAGE_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/";
  const abilityNames = ["Passive", "Q", "W", "E", "R"];
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [guess, setGuess] = useState<Ability>();
  const [guessed, setGuessed] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, []);

  const handleGuess = (ability: Ability) => {
    setGuess(ability);
    if (ability === props.abilities[props.abilityToGuess]) {
      setGuessed(true);
    }
  };

  return (
    mounted && (
      <Transition
        show={true}
        ref={bottomRef}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="bg-gradient-to-b from-btn-border-light to-btn-border-dark p-0.5  my-4">
          <div className="flex flex-col items-center gap-4 text-center bg-input-default w-80 py-10">
            <p className=" text-md text-input-text">
              Congratulations! <br></br>
              You guessed{" "}
              <span className=" text-btn-border-light text-lg">
                {props.champion["name"]}
              </span>
            </p>
            <div className="bg-gradient-to-b from-cell-light to-cell-dark p-0.5">
              <Image
                src={props.image}
                alt={props.champion["name"]}
                width={80}
                height={80}
              />
            </div>
            <p className="text-input-text">
              {props.abilities[props.abilityToGuess]["name"]}
            </p>
            <p className="text-input-text text-lg">Which spell is it ?</p>
            <div className="flex gap-2">
              {props.abilities.map((ability, index) => {
                return (
                  <button
                    disabled={guess !== undefined}
                    className={`${
                      guess !== undefined &&
                      ability === props.abilities[props.abilityToGuess] &&
                      "bg-cell-good"
                    } ${
                      guess === ability &&
                      ability !== props.abilities[props.abilityToGuess] &&
                      "bg-cell-bad"
                    } border-2 border-input-text px-2 select-none cursor-pointer`}
                    key={index}
                    onClick={() => {
                      handleGuess(ability);
                    }}
                  >
                    {abilityNames[index]}
                  </button>
                );
              })}
            </div>
            {guess && (
              <div className="text-input-text">
                {guessed ? (
                  <p className="text-input-text">Correct!</p>
                ) : (
                  <p className="text-input-text">Wrong!</p>
                )}
              </div>
            )}
            <div className="bg-gradient-to-b from-btn-border-light to-btn-border-dark p-0.5 font-medium">
              <button
                className="bg-btn-bg py-2 px-6 text-input-text "
                onClick={() => props.newGame()}
              >
                New Game
              </button>
            </div>
          </div>
        </div>
      </Transition>
    )
  );
}
