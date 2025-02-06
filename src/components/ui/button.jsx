import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-md px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
