import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { AuthenticationContext } from "@/context";
import React, { FC, useContext, useEffect, useState } from "react";

/**
 * useContext hook
 * O hook useContext permite-nos partilhar estados entre componentes
 * Sem a necessidade de passar props para os mesmos
 * Podemos considerar o useContext como uma forma de criar um estado GLOBAL
 */

const IntroPage4: FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthenticationContext);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-8">
        <h1>{isLoggedIn ? "Sessão válida" : "Sessão inválida"}</h1>
        <Button
          onClick={() =>
            isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
          }
        >
          {isLoggedIn ? "Log out" : "Log in"}
        </Button>
      </div>
    </>
  );
};

export default IntroPage4;
