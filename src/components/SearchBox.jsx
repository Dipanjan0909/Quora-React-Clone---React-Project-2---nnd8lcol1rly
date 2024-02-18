import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ display: "inline-flex" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        style={{ fontSize: "18px" }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button onClick={(e) => {}}>
        <SearchIcon style={{ fontSize: "18px" }} />
      </button>
    </div>
  );
};

export default SearchBox;
