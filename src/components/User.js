import React from "react";

function User({ uservalue }) {
  console.log(uservalue);
  return (
    <>
      User Component:-
      {uservalue ? <span className="text-danger">Username from Parent: {uservalue}</span> : ""}
    </>
  );
}

export default User;
