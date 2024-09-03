import css from "./style.module.css";
import { FC } from "react";
import { Link } from "../Link/Link";

interface Props {
  pathname: string
}

const links = [
  { to: "/friends", title: "Friends" },
  { to: "/rating", title: "Rating" },
  { to: "/", title: "Clicker" },
  { to: "/garage", title: "Garage" },
  { to: "/tasks", title: "Tasks" },
];

export const BottomNavbar: FC<Props> = ({ pathname }) => {
  return (
    <div className={css.wrapper}>
      {links.map((item) => (
        <Link key={item.to} to={item.to} style={{ color: pathname === item.to ? "yellowgreen" : "black" }}>{item.title}</Link>
      ))}
    </div>
  );
}