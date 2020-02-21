import React from "react";

//delete btn with props passed in
function DeleteBtn(props) {
  return (
    <span className="delete-btn" id="deleteBtn" {...props}>Delete</span>
  );
}

export default DeleteBtn;