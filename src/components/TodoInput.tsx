"use client";

import { useState, KeyboardEvent } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="タスクを入力..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
      />
      <button
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        追加
      </button>
    </div>
  );
}
