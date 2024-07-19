// Importing the Appname component from the Components folder
import AppName from "./components/AppName";
// Importing the Addtodo component from the Components folder
import AddTodo from "./components/AddTodo";
// Importing the TodoItems component from the Components folder
import TodoItems from "./components/TodoItems";
// Importing the WelcomeMessage component from the Components folder
import WelcomeMessage from "./components/WelcomeMessage";
// Importing the css file used for the app component
import "./App.css";
// Ipmporting the usestate function from the react library
import { useState } from "react";

function App() {

  // Creating a state where the new items which are going to be added in the list of todoItems 
  // The first object which it provides is the initial value: That can be null or nothing or a previous set of tasks/lists
  const [todoItems, setTodoItems] = useState([]);

  // this anonymous  function will handle the saving of the new items and painting it on the screen
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  
  // this anonymous function will handle to delete those added lists or works by certain action and that action is onClick of the button delete
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;