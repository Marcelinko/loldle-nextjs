"use client";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  image: string;
}

export default function Ability(props: Props) {
  const [rotation, setRotation] = useState(true);
  const [grayscale, setGrayscale] = useState(true);

  return (
    <div className="bg-gradient-to-b from-cell-light to-cell-dark p-0.5 w-80">
      <div className="flex flex-col items-center bg-input-default text-center gap-2 p-2">
        <p className="text-lg text-input-text">
          Which champion has this ability?
        </p>
        <div className="bg-gradient-to-b from-cell-light to-cell-dark p-0.5">
          <Image
            className={`${grayscale && "grayscale"} ${
              rotation && "rotate-[270deg]"
            }`}
            src={props.image}
            width={100}
            height={100}
            alt="ability"
          />
        </div>
        <div className="flex gap-3">
          <div>
            <p className="text-sm text-input-text mb-1">Rotation</p>
            <Switch
              checked={rotation}
              onChange={setRotation}
              className={`${rotation ? "bg-cell-light" : "bg-input-light"}
          relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${rotation ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-input-text shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
          <div>
            <p className="text-sm text-input-text mb-1">Grayscale</p>
            <Switch
              checked={grayscale}
              onChange={setGrayscale}
              className={`${grayscale ? "bg-cell-light" : "bg-input-light"}
          relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${grayscale ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-input-text shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
