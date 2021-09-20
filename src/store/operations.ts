import { makeAutoObservable } from "mobx";
import { OperationsList } from "../interfaces/interface";

class Operations {
  private operationsList: OperationsList[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get allOperations() {
    return this.operationsList;
  }
  set allOperations(list: OperationsList[]) {
    list.map((item: OperationsList) => this.operationsList.push(item));
  }

  async fetchRequest() {
    try {
      const response = await fetch("http://localhost:4000/operations");
      const result = await response.json();
      this.allOperations = result.data.operations;
    } catch (error) {
      console.error(error);
    }
  }

  getGroupByYear() {
    const newArray: any = {};
    this.operationsList.map((elem: any) => {
      if (newArray.hasOwnProperty(elem.authDate)) {
        newArray[elem.authDate].push({ ...elem });
      } else {
        newArray[elem.authDate] = [];
        newArray[elem.authDate].push({ ...elem });
      }
    });
    return Object.keys(newArray);
    // setNewObject(Object.keys(newArray));
  }
}

export default new Operations();
