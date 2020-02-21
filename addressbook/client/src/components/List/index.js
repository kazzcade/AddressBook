import React from "react";
import "./list.css";

//export functions to pass children onto list elements
export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return (
    <li id="listItem" className="list-group-item">{children}</li>
  );
}
