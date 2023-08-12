import React, { useState } from "react";
import "./Navbar.css";
import { useParams } from "../../context/context";
import { addNode, createTree } from "../../utils/binaryTree";

export default function Navbar() {
  const {
    algo,
    bst,
    setBST,
    setAlgo,
    mode,
    setMode,
    treeType,
    setTreeType,
    setRes,
    setRun,
  } = useParams();
  const [temp, setTemp] = useState("");
  const handleChange = (event) => {
    setTemp(event.target.value);
  };
  function newNode(number) {
    if (bst === null) {
      setBST(createTree(number));
    } else {
      setBST(addNode(bst, number));
    }

    setTemp("");
  }

  return (
    <div className="navbar">
      <div className="container">
        <div>
          <input
            type="text"
            id="nodeNumber"
            name="nodeNumber"
            value={temp}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              if (temp == "") {
                console.log("here");
              } else {
                newNode(temp);
              }
            }}
          >
            add node
          </button>
        </div>
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "deleteNode" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "deleteNode") setMode(null);
            else {
              setMode("deleteNode");
            }
          }}
        >
          <i className="bi bi-bricks"></i>
        </button>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={algo}
            onChange={(e) => {
              setAlgo(e.target.value);
            }}
          >
            <option value="">Choose your tree traversal</option>
            <option value="inorder">in order</option>
            <option value="postorder">post order</option>
            <option value="preorder">pre order</option>
            <option value="levelorder">level order</option>
          </select>
        </div>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={treeType}
            onChange={(e) => {
              setTreeType(e.target.value);
            }}
          >
            <option value="">Choose your tree type</option>
            <option value="BST">Binary Search Tree</option>
            <option value="RB">Red/Black Tree</option>
            <option value="AVL">AVL Tree</option>
            <option value="B*">B* Tree</option>
            <option value="B">B Tree</option>
            <option value="Splay">Splay Tree</option>
            <option value="PrioritySearch">Priority Search Tree</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setRes((old) => {
              return !old;
            });
          }}
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setRun((old) => {
              return !old;
            });
          }}
        >
          <i className="bi bi-caret-right"></i>
        </button>
      </div>
    </div>
  );
}
