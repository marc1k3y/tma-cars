import css from "./style.module.css";
import { FC } from "react";

export const ClickerPage: FC = () => {
  return (
    <div className={css.wrapper}>
      <button className={css.tapBtn}>car token</button>
    </div>
  );
}