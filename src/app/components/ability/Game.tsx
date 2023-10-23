"use client";
import { useState, useEffect, Fragment } from "react";
import championsJSON from "../../data/champions.json";
import ChampionInput from "../ChampionInput";
import GuessList from "./GuessList";
import GameOver from "./GameOver";
import Ability from "./Ability";

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

export default function AbilityGame() {
  const CHAMPION_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion/";
  const ABILITY_IMAGE_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.20.1/img/spell/";
  const PASSIVE_IMAGE_URL =
    "https://ddragon.leagueoflegends.com/cdn/13.20.1/img/passive/";
  const [champions, setChampions] = useState(championsJSON);
  const [champToGuess, setChampToGuess] = useState(
    championsJSON[Math.floor(Math.random() * championsJSON.length)]
  );
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [abilityToGuess, setAbilityToGuess] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [guessed, setGuessed] = useState(false);

  const newGame = () => {
    setGuessed(false);
    setChampions(championsJSON);
    setChampToGuess(
      championsJSON[Math.floor(Math.random() * championsJSON.length)]
    );
    setGuesses([]);
  };

  useEffect(() => {
    fetch(CHAMPION_URL + champToGuess.id + ".json").then((res) =>
      res.json().then((data) => {
        const abilities = data.data[champToGuess.id].spells;
        const passive = data.data[champToGuess.id].passive;
        abilities.unshift(passive);
        setAbilities(abilities);
        setAbilityToGuess(Math.floor(Math.random() * abilities.length));
      })
    );
  }, [champToGuess]);

  useEffect(() => {
    if (
      guesses.some((champion: Champion) => champion.name === champToGuess.name)
    ) {
      setGuessed(true);
      console.log("guessed");
    }
  }, [champToGuess.name, guesses]);

  return (
    <>
      {abilityToGuess !== null && abilities.length > 0 ? (
        <>
          <Ability
            image={
              abilityToGuess === 0
                ? PASSIVE_IMAGE_URL + abilities[abilityToGuess].image.full
                : ABILITY_IMAGE_URL + abilities[abilityToGuess].image.full
            }
          />
          <ChampionInput
            guessed={guessed}
            champions={champions}
            setChampions={setChampions}
            setGuesses={setGuesses}
          />
          {guesses.length > 0 && (
            <GuessList guesses={guesses} champToGuess={champToGuess} />
          )}
          {guessed && (
            <GameOver
              abilities={abilities}
              abilityToGuess={abilityToGuess}
              newGame={newGame}
              champion={champToGuess}
              image={
                abilityToGuess === 0
                  ? PASSIVE_IMAGE_URL + abilities[abilityToGuess].image.full
                  : ABILITY_IMAGE_URL + abilities[abilityToGuess].image.full
              }
            />
          )}
        </>
      ) : (
        <div className="text-lg text-input-text">Loading...</div>
      )}
    </>
  );
}
