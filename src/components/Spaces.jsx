import React, { useState } from "react";
import "../styles/Spaces.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [newSpaceName, setNewSpaceName] = useState("");

  const createSpace = () => {
    if (newSpaceName.trim() !== "") {
      setSpaces([...spaces, newSpaceName]);
      console.log(spaces);
      setNewSpaceName("");
    }
  };

  return (
    <div className="spaces-container">
      <h2>Spaces</h2>
      <div className="new-space-form">
        <input
          type="text"
          placeholder="Enter space name"
          value={newSpaceName}
          onChange={(e) => setNewSpaceName(e.target.value)}
        />
        <Button onClick={createSpace} variant="contained">
          Create Space
        </Button>
      </div>
      <ul className="spaces-list" style={{ listStyle: "none" }}>
        {spaces &&
          spaces.map((item, index) => <CheckBox item={item} key={index} />)}
      </ul>
    </div>
  );
};

const CheckBox = ({ item }) => {
  const [checked, setChecked] = useState(true);
  return (
    <li>
      <Checkbox
        style={{ display: "inline" }}
        onClick={() => setChecked(!checked)}
        defaultChecked={true}
      ></Checkbox>
      {item}
    </li>
  );
};

export default Spaces;
