//React
import { createContext, useContext } from "react";
//Data
import Data from "../data.json";
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  useContext(DataContext);
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
const values = {
  Data,
};

export const useData = () => useContext(DataContext);
