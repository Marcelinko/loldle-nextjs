"use client";
import { useState, useEffect } from "react";
import championsJSON from "../../data/champions.json";
import ChampionInput from "./ChampionInput";
import GuessList from "./GuessList";
import GameOver from "./GameOver";

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

export default function ClassicGame() {
  const [champions, setChampions] = useState(championsJSON);
  const [champToGuess, setChampToGuess] = useState(championsJSON[10]);
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
    if (
      guesses.some((champion: Champion) => champion.name === champToGuess.name)
    ) {
      setGuessed(true);
    }
  }, [champToGuess.name, guesses]);

  return (
    <>
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
          newGame={newGame}
          setGuessed={setGuessed}
          champion={champToGuess}
        />
      )}
    </>
  );
}
