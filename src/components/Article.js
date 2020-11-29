import React from "react";

export const Article = ({ title, image, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="lol-image" />
      <p>{content}</p>
    </div>
  );
};
