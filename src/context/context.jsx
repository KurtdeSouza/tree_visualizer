import { useContext, useState, createContext, useEffect, useRef } from "react";
import { createTree } from "../utils/binaryTree";
const context = createContext();

export const useParams = () => {
  return useContext(context);
};

export const ParamsProvider = ({ children }) => {
  const [nodeArray, setNodeArray] = useState([]);
  const [mode, setMode] = useState("");
  const [treeType, setTreeType] = useState("");
  const [run, setRun] = useState(false);
  const [bst, setBST] = useState(null);
  const [res, setRes] = useState(false);
  const [algo, setAlgo] = useState("");

  useEffect(() => {
    restart();
  }, [res]);

  function restart() {
    setBST(null);
  }

  return (
    <div>
      <context.Provider
        value={{
          nodeArray,
          setNodeArray,
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
