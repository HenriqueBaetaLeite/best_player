export default function OptionList({ options, selected, onSelect }) {
  return (
    <div className="space-y-2">
      {options.map(option => {
        const isSelected = selected === option

        return (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`
              w-full p-2 rounded text-left
              cursor-pointer
              transition-colors duration-150
              ${
                isSelected
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400"
              }
            `}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
