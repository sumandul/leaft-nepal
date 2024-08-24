import React, { useState } from "react";
import PropTypes from "prop-types";
import { classNames } from "../helper/className";

const InputField = ({
  className,
  label,
  name,
  placeholder,
  value,
  type,
  icon,
  onChange,
  register,
  disabled,
  rules,
  onClick,
  errors,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="block capitalize text-sm sm:text-[20px] mb-2       font-semibold ">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          
          className={classNames(
            "px-3 py-5  text-[0.8rem]  sm:text-base     text-black w-full   bg-white  accent-yellow-400    focus: outline-yellow-300    rounded-[1rem]   ",
            className
          )}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}

          {...props}
          {...(register && register(name, rules))}
        />

     
      </div>

      {errors && (
        <p className=" text-sm    text-red-500 mt-1 font-light  capitalize ">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
InputField.defaultProps = {
  type: "text",
};
InputField.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "text",
    "password",
    "file",
    "number",
    "date",
    "checkbox",
    "radio",
    "email",
    "month",
    "range",
    "color",
    "datetime-local",
  ]),
};

export default InputField;