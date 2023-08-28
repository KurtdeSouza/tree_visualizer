import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tree from "./components/Tree/Tree";
import { useParams } from "./context/context";

function App() {
  console.log(useParams());
  console.log("here");
  return (
    <div className="App">
      <Navbar></Navbar>
      <p>here</p>
      <Tree></Tree>
      <p>here</p>
    </div>
  );
}

export default App;
