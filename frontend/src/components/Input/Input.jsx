import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 rounded outline-none"
      />
      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="cursor-pointer text-indigo-900"
          onClick={() => {
            toggleShowPassword();
          }}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="cursor-pointer text-indigo-400"
          onClick={() => {
            toggleShowPassword();
          }}
        />
      )}
    </div>
  );
};

export default Input;
