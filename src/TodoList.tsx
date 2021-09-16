import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const TodoList = observer(() => {
  return (
    <div>
      {todo.todos.map((elem: any) => (
        <div  key={elem.id} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p>{elem.title}</p>
          <button type="button" onClick={() => todo.removeTodo(elem.id)}> x</button>
          <input type="checkbox" name="" id="" checked={elem.completed} onChange={()=> todo.completedTodo(elem)}/>
        </div>
      ))}
    </div>
  );
})

export default TodoList;
