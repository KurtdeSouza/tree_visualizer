import "./Level.css";
//import { useParams } from "../../context/node";
export function Level(array, l) {
  return (
    <div className="level" key={l}>
      {array}
    </div>
  );
}
export default Level;
