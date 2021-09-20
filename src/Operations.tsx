import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import operations from "./store/operations";

const groupArray = require("group-array");

const Operations = observer(() => {
  const [itemGropByYear, setItemGropByYear] = useState<any>();
  useEffect(() => {
    operations.fetchRequest();
  }, []);

  const onClick = () => {
    setItemGropByYear(operations.getGroupByYear())
  };
  console.log(itemGropByYear);


  return (
    <>
      {operations.allOperations.map((operation: any, index: number) => (
        <div key={index}>
          <h4>{operation.operationName}</h4>
          <p>Date: {operation.authDate}</p>
        </div>
      ))}
      <button onClick={onClick}>Group by date</button>
    </>
  );
});

export default Operations;
