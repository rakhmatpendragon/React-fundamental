import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feeding cat's", rowAssign: "Rakhmat" },
    { rowNumber: 2, rowDescription: "Service motorcycle", rowAssign: "Malik" },
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
  ]);

  const addTodo = (assigned: string, description: string) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const addNewTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssign: assigned,
    };
    setTodos((todos) => [...todos, addNewTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">My Todo List</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close the Form" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
};
