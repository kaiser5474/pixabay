import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="my-3 p-3 text-center alert alert-primary">{mensaje}</div>
  );
};

export default Error;
