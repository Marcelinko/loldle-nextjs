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
    <div className="flex gap-1 mb-1">
      {Object.keys(props.champion)
        .slice(0, -1)
        .map((key, index) => (
          <Transition
            key={key}
            appear={true}
            show={true}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            style={{ transitionDelay: `${index * 500}ms` }}
          >
            <div className="leading-5 flex hover:cursor-pointer select-none text-input-text bg-gradient-to-b from-cell-light to-cell-dark p-0.5 hover:from-cell-light-hover hover:to-cell-dark-hover w-20 h-20">
              {key === "icon" ? (
                <Image
                  src={IMAGE_URL + props.champion[key as keyof Champion]}
                  alt={props.champion["name"]}
                  width={80}
                  height={80}
                />
              ) : key === "release_year" ? (
                <div
                  className={`hover:brightness-90 h-full w-full flex justify-center items-center text-center
                    ${
                      props.champion[key as keyof Champion] ===
                      props.champToGuess[key as keyof Champion]
                        ? "bg-cell-good"
                        : "bg-cell-bad"
                    }
                  `}
                >
                  {props.champion[key as keyof Champion]}
                  {props.champion[key as keyof Champion] ===
                  props.champToGuess[key as keyof Champion]
                    ? ""
                    : props.champion[key as keyof Champion] >
                      props.champToGuess[key as keyof Champion]
                    ? "▼"
                    : "▲"}
                </div>
              ) : Array.isArray(props.champion[key as keyof Champion]) ? (
                <div
                  className={`hover:brightness-90 h-full w-full flex flex-col justify-center items-center text-center ${
                    (props.champion[key as keyof Champion] as string[]).every(
                      (value) =>
                        (
                          props.champToGuess[key as keyof Champion] as string[]
                        ).includes(value)
                    )
                      ? " bg-cell-good"
                      : (
                          props.champion[key as keyof Champion] as string[]
                        ).some((value) =>
                          (
                            props.champToGuess[
                              key as keyof Champion
                            ] as string[]
                          ).includes(value)
                        )
                      ? " bg-cell-partial"
                      : " bg-cell-bad"
                  }`}
                >
                  {(props.champion[key as keyof Champion] as string[]).map(
                    (value: string, index: number) => (
                      <p key={index}>{value}</p>
                    )
                  )}
                </div>
              ) : (
                <div
                  className={`hover:brightness-90 h-full w-full flex justify-center items-center text-center ${
                    props.champion[key as keyof Champion] ===
                    props.champToGuess[key as keyof Champion]
                      ? "bg-cell-good"
                      : "bg-cell-bad"
                  }`}
                >
                  {props.champion[key as keyof Champion]}
                </div>
              )}
            </div>
          </Transition>
        ))}
    </div>
  );
}
