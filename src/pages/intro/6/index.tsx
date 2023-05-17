import { Input } from "@/components/Input";
import { Todo } from "@/components/Todo";
import React, { FC, useEffect, useState } from "react";

/**
 * Data fetching e Promises
 *
 */

interface Todo {
  id: number;
  title: string;
}

const IntroPage6: FC = () => {
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
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isChecked={completedTodos.includes(todo.id)}
              onCheckboxChange={() => {
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
        <Input
          placeholder="Insere a tua nova tarefa"
          value={newTodo.title}
          onTextChange={(title) => {
            setNewTodo({ ...newTodo, title });
          }}
        />
      </form>
    </div>
  );
};

export default IntroPage6;
