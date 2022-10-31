import { createContext } from "react";
import PropertiesProvider from "./properties";


const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};

export default RootContext;
