import React from "react";

function Form({ todos, setTodos, inputText, setInputText, setStatus }) {
  // Here Can write javascript code and function

  const inputTexthandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodohandler = (e) => {
    e.preventDefault();
    if (inputText != "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };

  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div className="container ml-10 mr-10 mt-4 w-50">
      <form action="#" className="row">
        <div className="col-10 w-75 col-sm-8">
          <div className="row">
            <div className="col-9 mb-3 w-75">
              <input
                value={inputText}
                type="text"
                className="form-control"
                onChange={inputTexthandler}
              />
            </div>
            <div className="col-3 float-right text-center w-25">
              <button
                onClick={submitTodohandler}
                type="submit"
                className="btn btn-primary"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>

        <div className="col-2 w-25">
          <select onChange={statusHandler} className="form-select" name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
