import "./Node.css";
import { useState } from "react";
//import { useParams } from "../../context/node";
export function Node(number, index) {
  console.log("Node");
  return (
    <div className="circle" key={`${number}${index}`}>
      {number}
    </div>
  );
}
export default Node;
