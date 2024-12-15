function TodoRowItem(props) {
  // const rowNumber = "3";
  // const rowDescription = "Learn Programming";
  // const rowAssign = "Ibrahim";

  return (
    <tr>
      {/* 
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssign}</td> 
      */}
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssign}</td>
    </tr>
  );
}

export default TodoRowItem;
