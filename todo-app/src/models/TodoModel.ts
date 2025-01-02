class TodoModel {
  rowNumber: number;
  rowDescription: string;
  rowAssign: string;

  constructor(rowNumber: number, rowDescription: string, rowAssign: string) {
    this.rowNumber = rowNumber;
    this.rowDescription = rowDescription;
    this.rowAssign = rowAssign;
  }
}
