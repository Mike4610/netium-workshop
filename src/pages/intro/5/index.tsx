import React, { FC, useState } from "react";

/**
 * Listas
 * Para percorrer uma lista em React utilizamos o metodo .map dos arrays
 * Cada elemento da lista deve ter um prop identificador, ao qual chamamos de key
 * Desta forma, como cada elemento tem uma key única, o React consegue saber exatamente qual elemento da lista
 * É atualizado, e re-renderizar apenas o elemento em questão
 */

/**
 * Exercicio
 * Separar o seguinte código em componentes reutilizaveis
 */

interface Todo {
  id: number;
  title: string;
}

const IntroPage5: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Todo>({} as Todo);
  const [completedTodos, setCompletedTodos] = useState<number[]>([]);

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
