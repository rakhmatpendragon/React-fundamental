import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
    { rowNumber: 3, rowDescription: "Reading book", rowAssign: "Leon" },
    {
      rowNumber: 4,
      rowDescription: "Cleaning cat litter box",
      rowAssign: "ART",
    },
    {
      rowNumber: 5,
      rowDescription: "Designing new calendar",
      rowAssign: "Rmalik",
    },
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">My Todo List</div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
