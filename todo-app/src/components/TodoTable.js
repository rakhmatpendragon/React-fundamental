import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
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
        <tr>
          <th scope="row">1</th>
          <td>Feeding cat's</td>
          <td>Rakhmat</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Service motorcycle</td>
          <td>Malik</td>
        </tr>
        <TodoRowItem
          rowNumber={props.todos[0].rowNumber}
          rowDescription={props.todos[0].rowDescription}
          rowAssign={props.todos[0].rowAssign}
        />
        <TodoRowItem
          rowNumber={props.todos[1].rowNumber}
          rowDescription={props.todos[1].rowDescription}
          rowAssign={props.todos[1].rowAssign}
        />
        <TodoRowItem
          rowNumber={props.todos[2].rowNumber}
          rowDescription={props.todos[2].rowDescription}
          rowAssign={props.todos[2].rowAssign}
        />
      </tbody>
    </table>
  );
}

export default TodoTable;
