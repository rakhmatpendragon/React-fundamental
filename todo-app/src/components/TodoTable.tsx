import { TodoRowItem } from "./TodoRowItem";
import React from "react";

export const TodoTable: React.FC<{
  todos: TodoModel[];
  deleteTodo: Function;
}> = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssign={todo.rowAssign}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};
