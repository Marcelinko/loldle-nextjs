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

interface Props {
  newGame: Function;
  setGuessed: Function;
  champion: Champion;
}

export default function GameOver(props: Props) {
  const IMAGE_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/";
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }, 4500);
  }, []);
  return (
    mounted && (
      <Transition show={true} ref={bottomRef}>
        <div className="bg-gradient-to-b from-btn-border-light to-btn-border-dark p-0.5  my-4">
          <div className="flex flex-col items-center gap-4 text-center bg-input-default px-20 py-10">
            <p className=" text-md text-input-text">
              Congratulations! <br></br>
              You guessed
              <span className=" text-btn-border-light text-lg">
                {props.champion["name"]}
              </span>
            </p>
            <div className="bg-gradient-to-b from-cell-light to-cell-dark p-0.5">
              <Image
                src={IMAGE_URL + props.champion["icon"]}
                alt={props.champion["name"]}
                width={100}
                height={100}
              />
            </div>
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
