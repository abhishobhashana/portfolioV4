import React from "react";
import { UseModeChecker } from "../../useModeChecker";

export default function Folder() {
  const mode = UseModeChecker();

  return (
    <svg
      width="1.875rem"
      height="1.875rem"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke={mode ? "rgb(247, 247, 245)" : "rgb(108, 108, 108)"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-folder"
    >
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}
