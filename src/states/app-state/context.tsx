import { createContext, Dispatch, useReducer } from "react";
import { Action, initialState, State, reducer } from "./state";

export const appContext = createContext<[State, Dispatch<Action<any>>]>([
  initialState,
  () => {},
]);

export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <appContext.Provider value={[state, dispatch]}>
      {children}
    </appContext.Provider>
  );
};
