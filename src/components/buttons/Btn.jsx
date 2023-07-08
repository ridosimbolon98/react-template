import React from "react";
import Icon from "../Icon";

export default function Btn(props) {
  return (
    <button
      className={`flex items-center gap-1 px-3 py-1 text-white shadow-md rounded-[4px] ${props.class}`}
    >
      <Icon icon={props.icon} cname={`w-[1rem] h-[1rem]`} />
      <span>{props.text}</span>
    </button>
  );
}
