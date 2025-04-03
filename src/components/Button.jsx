import React from "react";
import { IconButton } from "@mui/material";
import {
  Login,
  PlayArrow,
  Done,
  Clear,
  Logout,
  LiveTv,
} from "@mui/icons-material";

export default function Button({ label, className, type }) {
  const icons = {
    login: <Login />,
    start: <PlayArrow />,
    submit: <Done />,
    reset: <Clear />,
    logout: <Logout />,
    livedemo: <LiveTv />,
  };

  return (
    <button
      className={`btn ${className} flex items-center gap-2 px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 bg-black text-white`}
    >
      <span className="font-semibold">{label}</span>
      <IconButton size="small" className="text-white">
        {icons[type]}
      </IconButton>
    </button>
  );
}
