import React, { FC } from "react";

export interface CheckboxProps {
  id: number;
  isChecked: boolean;
  onCheckboxChange: (id: number) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => onCheckboxChange(id)}
    />
  );
};
