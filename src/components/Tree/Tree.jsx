import React, { useEffect, useRef, useState } from "react";
import "./Tree.css";
import { useParams } from "../../context/context";
import { addNode, inOrder } from "../../utils/binaryTree";

export default function Tree() {
  const { nodeArray, algo, bst } = useParams();
  var arrayLength = nodeArray.length;
  if (algo === "inorder") {
    inOrder(bst);
  }
  //for (var i = 0; i < arrayLength; i++) {
  //  console.log(nodeArray[i]);
  //Do something
  //}

  return <div>{nodeArray}</div>;
}
