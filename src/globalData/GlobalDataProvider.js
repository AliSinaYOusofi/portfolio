import { createContext, useContext, useReducer } from "react";

const State = createContext();

export const GlobalStateProvider = ( ({children, reducer, initialState}) => (
    <State.Provider value={useReducer(reducer, initialState)}>
        {children}
    </State.Provider>
));
export const useGlobalData = () => useContext(State);