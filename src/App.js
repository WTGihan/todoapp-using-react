import "./App.css";
import { useState } from "react";

// Importing components
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
