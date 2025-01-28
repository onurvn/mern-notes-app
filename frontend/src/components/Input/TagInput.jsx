import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagRemove) => {
    setTags(tags.filter((tag) => tag !== tagRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-slate-950 bg-slate-100 px-3 py-1 rounded"
            >
              # {tag}
              <button
                className="cursor-pointer"
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border px-2 py-1 rounded outline-none"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-8 h-8 flex items-center justify-center rounded bg-indigo-900"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-white cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
