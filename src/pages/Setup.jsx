import React from "react";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();

  return (
    <div>
      Setup
      <button onClick={() => navigate("/")}>Pictures</button>
    </div>
  );
};

export default Setup;
