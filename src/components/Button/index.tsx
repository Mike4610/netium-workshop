import React, { FC } from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
    >
      {children}
    </button>
  );
};
