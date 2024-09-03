import css from "./style.module.css";
import { FC, useState } from "react";

export const ClickerPage: FC = () => {
  const [counter, setCounter] = useState(0);

  const words = ["БЭМС", "БУБУМС", "ЙОПС", "КЕК", "ЖМЭКС", "ДУМС"];

  const counterToWord = (num: number) => {
    function getRandomArbitrary(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (num % 5 === 0) {
      return words[getRandomArbitrary(0, words.length - 1)];
    } else {
      return num;
    }
  }

  return (
    <div className={css.wrapper}>
      <div className={css.counter}>{counterToWord(counter)}</div>
      <button className={css.tapBtn} onClick={() => setCounter(counter + 1)}>car token</button>
    </div>
  );
}