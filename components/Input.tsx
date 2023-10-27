import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(
  { className, type, disabled, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      type={type}
      className={twMerge(
        "flex w-full rounded-md bg-neutral-700 border border-transparent p-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
}

Input.displayName = "Input";

export default React.forwardRef(Input);
