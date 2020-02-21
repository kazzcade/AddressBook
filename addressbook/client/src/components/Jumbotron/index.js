import React from "react";

//creat jumbotron and pass children
function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
}

export default Jumbotron;