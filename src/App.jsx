import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./features/todo/todoSlice";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log("add");
    dispatch(addTodo("hello world 2"));
  };

  const handleRemove = (id) => {
    console.log("remove");
    dispatch(removeTodo(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: "hello Birds" }));
  };

  return (
    <div>
      <div>
        This is RTK query
        <button onClick={handleAdd}>add</button>
        <p>todo</p>
        <ul>
          {todos.map((todo, idx) => (
            <li key={todo.id}>
              {idx + 1}. {todo.text}
              <span> </span>
              <button onClick={() => handleRemove(todo.id)}>X</button>
              <button onClick={() => handleUpdate(todo.id)}>Up</button>
            </li>
          ))}
        </ul>
      </div>

      <h2>All products</h2>
      <AllProducts />

      <h2>Single product</h2>
      <SingleProduct />

      <h2>Add new</h2>
      <AddNewProduct />

      <h2>Update</h2>
      <UpdateProduct productId={1} />
    </div>
  );
};

export default App;
