import { AuthenticationContext } from "@/context";
import React, { FC, useContext } from "react";

/**
 * Neste exemplo, o componente Header sabe se o utilizador está ou não
 */

export const Header: FC = () => {
  const { isLoggedIn } = useContext(AuthenticationContext);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 px-12 h-20 w-screen bg-gray-200 flex items-center justify-end">
      <h1>Ver perfil</h1>
    </div>
  );
};
