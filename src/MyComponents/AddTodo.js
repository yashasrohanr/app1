import React from "react";
import { useState } from "react";
export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">To-do title</label>
          <input
            type="text"
            className="form-control my-3"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            // aria-describedby="emailHelp"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">To-do Description</label>
          <input
            type="text"
            className="form-control my-3"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Description"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Add ToDo
        </button>
      </form>
    </div>
  );
};
