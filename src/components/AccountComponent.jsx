import React from "react";
import "../styles/AccountComponent.css";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const AccountComponent = () => {
  return (
    <div className="account-container">
      <div className="account-info">
        <PersonIcon />
        <input
          type="text"
          placeholder="Ask here..."
          style={{ fontSize: "18px", padding: "8px", width: "400px" }}
          onChange={(e) => {}}
        />
      </div>
      <div className="action-icons">
        <LiveHelpIcon />
        <QuestionAnswerIcon />
        <BorderColorIcon />
      </div>
    </div>
  );
};

export default AccountComponent;
