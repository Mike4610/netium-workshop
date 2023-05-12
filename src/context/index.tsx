import { Dispatch, SetStateAction, createContext } from "react";

export const AuthenticationContext = createContext<
  | {
      isLoggedIn: boolean;
      setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    }
  | any
>(null);
