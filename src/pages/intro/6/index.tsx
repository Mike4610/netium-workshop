import React, { FC, useEffect, useState } from "react";

/**
 * Data fetching e Promises
 *
 */

interface Todo {
  id: number;
  title: string;
}

const IntroPage5: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Todo>({} as Todo);
  const [completedTodos, setCompletedTodos] = useState<number[]>([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json() as Promise<Todo[]>)
  //       .then((todos) => {
  //         setTodos(todos.slice(0, 5));
  //       })
  //       .catch((error) => alert("Ocorreu um erro!"));
  //   }, []);

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/todos"
  //         );
  //         const todos = await response.json();
  //         setTodos(todos.slice(0, 5));
  //       } catch (e) {
  //         alert("Ocorreu um erro!");
  //       }
  //     })();
  //   }, []);

  return (
    <div className="relative h-[500px] w-[500px] bg-gray-800">
      <div>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex flex-row items-center justify-between hover:bg-gray-600 cursor-pointer p-4"
            >
              <p className="text-white">{todo.title}</p>
              <input
                type="checkbox"
                checked={completedTodos.includes(todo.id)}
                onChange={() => {
                  if (completedTodos.includes(todo.id)) {
                    setCompletedTodos(
                      completedTodos.filter(
                        (completedTodo) => completedTodo !== todo.id
                      )
                    );
                  } else {
                    setCompletedTodos([...completedTodos, todo.id]);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, { id: todos.length + 1, title: newTodo.title }]);
          setNewTodo({ ...newTodo, title: "" });
        }}
      >
        <div className="absolute bottom-0 w-full bg-gray-600 h-12 px-4">
          <input
            value={newTodo.title}
            onChange={(e) => {
              setNewTodo({ ...newTodo, title: e.target.value });
            }}
            className="w-full bg-gray-600 h-12 outline-0 text-white"
            placeholder="Insere a tua nova tarefa"
          />
        </div>
      </form>
    </div>
  );
};

export default IntroPage5;
