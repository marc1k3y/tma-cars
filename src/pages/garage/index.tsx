import css from "./style.module.css";
import { FC } from "react";
import { useAppSelector } from "@/store";
import { UpgradeItem } from "@/components/UpgradeItem";

export const GaragePage: FC = () => {
  const { upgrades } = useAppSelector((state) => state.gamer);

  if (upgrades.offroad.length > 0 && upgrades.circle.length > 0 && upgrades.drag.length > 0) return (
    <div className={css.wrapper}>
      Garage Page
      <div className={css.upgrades}>
        {upgrades.offroad.map((item) => <UpgradeItem category={"offroad"} data={item} />)}
        {upgrades.circle.map((item) => <UpgradeItem category={"circle"} data={item} />)}
        {upgrades.drag.map((item) => <UpgradeItem category={"drag"} data={item} />)}
      </div>
    </div>
  );
}