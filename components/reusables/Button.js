import React from "react";

const Button = ({ link, title, className }) => {
  return (
    <a href={link}>
      <button
        class={`bg-transparent hover:bg-rose-500 text-rose-700 font-semibold hover:text-white py-2 px-4 border border-rose-500 hover:border-transparent ${className}`}
      >
        {title}
      </button>
    </a>
  );
};

export default Button;
