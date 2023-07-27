import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tree from "./components/Tree/Tree";
import { useParams } from "./context/context";

function App() {
  console.log(useParams());

  return (
    <div className="App">
      <Navbar></Navbar>
      <Tree></Tree>
    </div>
  );
}

export default App;
