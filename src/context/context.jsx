import { useContext, useState, createContext, useEffect } from "react";
import { createTree } from "../utils/binaryTree";
const context = createContext();

export const useParams = () => {
  return useContext(context);
};

export const ParamsProvider = ({ children }) => {
  const [mode, setMode] = useState("");
  const [treeType, setTreeType] = useState("");
  const [run, setRun] = useState(false);
  const [bst, setBST] = useState(createTree());
  const [res, setRes] = useState(false);
  const [algo, setAlgo] = useState("");

  useEffect(() => {
    restart();
  }, [res]);

  function restart() {
    setBST(createTree());
  }

  return (
    <div>
      <context.Provider
        value={{
          algo,
          setAlgo,
          mode,
          setMode,
          treeType,
          setTreeType,
          bst,
          setBST,
          setRes,
          run,
          setRun,
          res,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};
