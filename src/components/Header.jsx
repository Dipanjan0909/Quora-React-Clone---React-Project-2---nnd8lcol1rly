import React, { useState } from "react";
import "../styles/Header.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchBox from "./SearchBox";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import CustomizedDialogs from "../utils/Dialog";
const Header = () => {
  const [openLogin, setOpenLogIn] = useState(false);
  return (
    <>
      <header className="quora-header">
        <div className="quora-logo">Quora</div>
        <div className="icons">
          <HomeIcon />
        </div>
        <div className="icons">
          <FormatListBulletedIcon />
        </div>
        <div className="icons">
          <BorderColorIcon />
        </div>
        <div className="icons">
          <GroupsIcon />
        </div>
        <div className="icons">
          <NotificationsActiveIcon />
        </div>
        <SearchBox />
        <div
          className="icons"
          onClick={() => {
            console.log("clicked");
            setOpenLogIn(true);
          }}
        >
          <PersonIcon />
        </div>
        <div className="icons">
          <LanguageIcon />
        </div>
      </header>
      {openLogin && (
        <CustomizedDialogs openLogin={openLogin} setOpenLogIn={setOpenLogIn} />
      )}
    </>
  );
};

export default Header;
