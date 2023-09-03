import React, { useEffect, useRef, useState } from "react";
import "./Tree.css";
import { useParams } from "../../context/context";
import Node from "../Node/Node";
import Levels from "../Levels/Levels";
import {
  addNode,
  inOrder,
  getLevelOrder,
  getRootNode,
} from "../../utils/binaryTree";
//import Node from "../Node/Node";

export default function Tree() {
  console.log("here123");
  let { bst } = useParams();
  if (bst == null || getRootNode(bst) == null) {
    console.log("Tree");
    return;
  }
  const tree = getLevelOrder(bst);
  const Tree = [];
  for (var key in tree) {
    const level = [];
    for (var i = 0; i < tree[key].length; i++) {
      level.push(Node(tree[key][i], i));
    }
    Tree.push(Levels(level, key));
  }
  console.log(bst);
  return <div className="tree">{Tree}</div>;
}
