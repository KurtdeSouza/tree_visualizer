import { useContext, useState, createContext, useEffect } from "react";
import { createTree } from "../utils/binaryTree";
import Tree from "../components/Tree/Tree";

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
  const [newnode, setNewNode] = useState(false);
  useEffect(() => {
    console.log("render");
  });
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
          newnode,
          setNewNode,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};
