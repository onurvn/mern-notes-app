import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <>
      <div className="w-80 flex items-center px-4 bg-slate-100 rounded-lg">
        <input
          type="text"
          placeholder="Search Notes"
          className="w-full text-xs bg-transparent py-[12px] outline-none"
          value={value}
          onChange={onChange}
        />

        {value && (
          <IoMdClose
            className="text-xl cursor-pointer text-slate-500 mr-1.5"
            onClick={onClearSearch}
          />
        )}

        <FaMagnifyingGlass
          className="cursor-pointer text-slate-500"
          onClick={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBar;
