import React from "react";

//export functions that allow use of bootstrap without worrying about class names
export function Container({ fluid, children }) {
  return (
    <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
  );
}

export function Row({ fluid, children }) {
  return (
    <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
  );
}

//allows resize of Col in bootstrap with slightly less syntax
export function Col({ size, children }) {
  return (
    <div className={size
      .split(" ")
      .map(size => "col-" + size)
      .join(" ")}>

      {children}
    </div>
  );
}
