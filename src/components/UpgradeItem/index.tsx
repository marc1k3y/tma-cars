import css from "./style.module.css";
import { UpgradeItemIE, UpgradeCategoriesType } from "../../shared/types";
import { useAppDispatch } from "@/store";
import { upgradeByIdThunk } from "@/store/thunks/gamer";

interface Props {
  category: UpgradeCategoriesType
  data: UpgradeItemIE
}

export const UpgradeItem = ({ category, data }: Props) => {
  const dispatch = useAppDispatch();
  const { title, level, startPrice, priceFactor } = data;
  const price = startPrice * (level * priceFactor);

  const upgradeHandler = () => {
    dispatch(upgradeByIdThunk({ category, upgradeId: data.id }));
  }
  return (
    <div className={css.wrapper}>
      <div>{title}</div>
      <div>{level}</div>
      <button onClick={upgradeHandler}>{price}</button>
    </div>
  );
}