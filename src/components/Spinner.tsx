import React from "react";

interface IProps {
  text: string;
  size: string;
}

function Spinner({ text = "", size = "5em" }: IProps) {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
}

export default Spinner;
