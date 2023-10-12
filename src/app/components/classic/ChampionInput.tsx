"use client";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
  champions: Champion[];
  setChampions: Function;
  setGuesses: Function;
  guessed: boolean;
}

export default function ChampionInput(props: Props) {
  const IMAGE_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/";

  const [query, setQuery] = useState("");
  const filteredChampions = props.champions.filter((champion) =>
    champion.name.toLowerCase().startsWith(query.toLowerCase())
  );

  const guessChampion = (champion: Champion) => {
    if (champion === undefined) return;
    props.setChampions((champions: Champion[]) =>
      champions.filter((c) => c !== champion)
    );
    props.setGuesses((guesses: Champion[]) => [...guesses, champion]);
  };

  return (
    <div className="w-80">
      <Combobox value={query} disabled={props.guessed}>
        <div className="relative mt-1">
          <div className="bg-gradient-to-b p-0.5 from-input-border-dark to-input-border-light relative w-full cursor-default overflow-hidden text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder="Champion..."
              className="text-lg font-medium focus:bg-gradient-to-b focus:from-input-dark focus:to-input-light bg-input-default w-full py-2 px-2 text-input-text placeholder-input-text-placeholder placeholder:font-normal outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Combobox.Button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <XMarkIcon className="h-5 w-5 text-input-text" aria-hidden />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute max-h-72 w-full overflow-auto bg-input-default text-base focus:outline-none z-10">
              {query !== "" &&
                (filteredChampions.length === 0 ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-input-text">
                    No champion found.
                  </div>
                ) : (
                  filteredChampions.map((champion) => (
                    <Combobox.Option
                      key={champion.name}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-2 ${
                          active
                            ? "bg-gradient-to-b from-input-dark to-input-light text-input-text"
                            : "text-input-text-placeholder"
                        }`
                      }
                      value={champion.name}
                      onClick={() => {
                        setQuery("");
                        guessChampion(champion);
                      }}
                    >
                      <div className="flex items-center">
                        <Image
                          src={IMAGE_URL + champion.icon}
                          alt={champion.name}
                          width={40}
                          height={40}
                        />
                        <span className="ml-2 block truncate">
                          {champion.name}
                        </span>
                      </div>
                    </Combobox.Option>
                  ))
                ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
