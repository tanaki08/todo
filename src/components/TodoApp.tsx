"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoFilter } from "./TodoFilter";

export function TodoApp() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    isLoaded,
  } = useTodos();

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-400">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          TODO
        </h1>

        <div className="space-y-4">
          <TodoInput onAdd={addTodo} />

          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            onClearCompleted={clearCompleted}
          />

          <div className="space-y-2">
            {todos.length === 0 ? (
              <p className="py-8 text-center text-gray-400">
                {filter === "all"
                  ? "タスクがありません"
                  : filter === "active"
                  ? "未完了のタスクはありません"
                  : "完了したタスクはありません"}
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
