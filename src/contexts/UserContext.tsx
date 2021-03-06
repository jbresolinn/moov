import { createContext, ReactNode, useEffect, useState } from "react";
import axios from 'axios'

interface UserContextData {
  user: UserProps
}

interface UserProviderProps {
  children: ReactNode,
  user: UserProps
};

interface UserProps {
  id: string;
  name: string;
  avatar: string;
  username: string;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children, ...rest }: UserProviderProps) {
  const [user, setUser] = useState(rest.user ?? {} as UserProps);

  useEffect(() => {
    setUser(rest.user);
  }, [rest.user])


  return (
    <UserContext.Provider value={{
      user
    }}>
      {children}
    </UserContext.Provider>
  )
}