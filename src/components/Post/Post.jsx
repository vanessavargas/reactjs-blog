const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        className="cover"
        src={`../../../public/assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      />

      <h2 className="post-title">{post.titulo}</h2>

      <button className="btn-read">Ler</button>
    </div>
  );
};

export default Post;
