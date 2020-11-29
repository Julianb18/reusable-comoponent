import React from "react";

export const Article = ({ title, image, content }) => {
  return (
    <div className="article-card">
      <h1>{title}</h1>
      <img src={image} alt="lol-image" />
      <p className="content">{content}</p>
    </div>
  );
};
