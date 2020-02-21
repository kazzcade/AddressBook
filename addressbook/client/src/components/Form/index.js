import React from "react";

//export functions to be used in form on contact page
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>

  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn" id="formBtn" type="submit">
      {props.children}
    </button>
  );
}
