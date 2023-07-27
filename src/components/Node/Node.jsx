import "./Node.css";
function Node(number) {
  return (
    <div className="circle" key={number}>
      {number}
    </div>
  );
}
export default Node;
