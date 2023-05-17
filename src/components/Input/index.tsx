import React, { FC } from "react";

interface InputProps {
  value: string;
  placeholder: string;
  onTextChange: (t: string) => void;
}

export const Input: FC<InputProps> = ({ placeholder, value, onTextChange }) => {
  return (
    <div className="absolute bottom-0 w-full bg-gray-600 h-12 px-4">
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        className="w-full bg-gray-600 h-12 outline-0 text-white"
      />
    </div>
  );
};
