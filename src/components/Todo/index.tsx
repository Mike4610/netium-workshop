import React, { FC } from "react";
import { Checkbox, CheckboxProps } from "../Checkbox";

interface TodoProps extends CheckboxProps {
  id: number;
  title: string;
}

export const Todo: FC<TodoProps> = ({
  id,
  title,
  onCheckboxChange,
  isChecked,
}) => {
  return (
    <div className="flex flex-row items-center justify-between hover:bg-gray-600 cursor-pointer p-4">
      <p className="text-white">{title}</p>
      <Checkbox
        id={id}
        isChecked={isChecked}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  );
};
