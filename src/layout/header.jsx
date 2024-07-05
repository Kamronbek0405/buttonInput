import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",

        padding: "30px",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>about</Link>
    </div>
  );
};
