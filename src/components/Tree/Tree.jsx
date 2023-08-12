import React, { useEffect, useRef, useState } from "react";
import "./Tree.css";
import { useParams } from "../../context/context";
import Node from "../Node/Node";
import Level from "../Level/Level";

import { addNode, inOrder, getLevelOrder } from "../../utils/binaryTree";
//import Node from "../Node/Node";

export default function Tree() {
  const { bst, nodeArray, setNodeArray } = useParams();
  //let n = Node(number);
  const nodes = getLevelOrder(bst);
  console.log(nodes);
  if (nodes == null || nodes[0] == null) {
    return;
  }
  for (var key in nodes) {
    const l = [];
    console.log(nodes[key].length);
    for (var i = 0; i < nodes[key].length; i++) {
      l.push(Node(nodes[key][i]));
    }
    setNodeArray([...nodeArray, Level(l, key)]);
  }
  return <div className="tree">{nodeArray}</div>;
}
