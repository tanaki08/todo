"use client";

import { FilterType } from "@/types/todo";

type Props = {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  onClearCompleted: () => void;
};

const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "active", label: "未完了" },
  { value: "completed", label: "完了" },
];

export function TodoFilter({ filter, onFilterChange, activeCount, onClearCompleted }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500">
      <span>{activeCount}件の未完了タスク</span>

      <div className="flex gap-1">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(option.value)}
            className={`rounded-md px-3 py-1 transition-colors ${
              filter === option.value
                ? "bg-blue-100 text-blue-600 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        className="hover:text-red-500 transition-colors"
      >
        完了を削除
      </button>
    </div>
  );
}
