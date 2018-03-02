import React from "react";

const TodosList = props => {
  const todos = props.todos;
  const target = props.target;
  const searchWord = props.searchWord;
  const showAll = props.showAll;

  return todos.map((todo, i) => {
    let typedWord = searchWord.toUpperCase();
    let titleCasing = todo.doTitle.toUpperCase();
    if (showAll) {
      if (
        titleCasing.includes(
          typedWord.split("").map(e => {
            if (typedWord.length === 1) return e;
            if (showAll === titleCasing.substring(0, typedWord.length - 1))
              return e;
          })
        )
      ) {
        return (
          <div className="todo" key={i} onClick={() => target(i)}>
            <h1 className="doTitle">{todo.doTitle}</h1>
            <p className="doDescription">{todo.doDescription}</p>
          </div>
        );
      }
      return null;
    }
    return (
      <div className="todo" key={i} onClick={() => target(i)}>
        <h1 className="doTitle">{todo.doTitle}</h1>
        <p className="doDescription">{todo.doDescription}</p>
      </div>
    );
  });
};

export default TodosList;
