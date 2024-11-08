import React, { useState, ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "./InputField.module.scss"; // Import SCSS module styles

interface InputFieldProps {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.inputField}>
      <input
        {...props}
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
      {type === "password" && (
        <button
          type="button"
          className={styles.toggleVisibility}
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? "HIDE" : "SHOW"}
        </button>
      )}
    </div>
  );
};

export default InputField;
