import "./Node.css";
import { useState } from "react";
//import { useParams } from "../../context/node";
export function Node(number) {
  return (
    <div className="circle" key={number}>
      {number}
    </div>
  );
}
export default Node;
