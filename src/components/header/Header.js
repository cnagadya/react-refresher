import React from "react";

export const Header = (props) => (
  <header>
    <h1> Today's deal</h1>
    <h3 className="tagline">{props.tagline}</h3>
  </header>
);
