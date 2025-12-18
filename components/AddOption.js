"use client"

import { useRef, useState } from "react"

export default function AddOption({ placeholder, onAdd }) {
  const [value, setValue] = useState("")
  const inputRef = useRef(null)

  function handleAdd() {
    if (!value.trim()) return
    onAdd(value.trim())
    setValue("")

    // 👇 volta o foco para o input
    inputRef.current?.focus()
  }

  return (
    <div className="flex gap-2 my-2">
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="
          flex-1 border rounded p-2
          focus:outline-none focus:ring-2 focus:ring-green-500
        "
      />
      <button
        onClick={handleAdd}
        className="
          bg-black text-white px-4 rounded
          cursor-pointer
          transition-colors
          hover:bg-gray-800 active:bg-gray-900
        "
      >
        +
      </button>
    </div>
  )
}
