const PostModelo = ({ children, fotoCapa, titulo }) => {
  return (
    <article className="model-post-container">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className="model-post-title">{titulo}</h2>

      <div className="model-post-content">{children}</div>
    </article>
  );
};

export default PostModelo;
