import "./Levels.css";
//import { useParams } from "../../context/node";
export function Levels(array, l) {
  return (
    <div className="levels" key={l}>
      {array}
    </div>
  );
}
export default Levels;
