import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img
          className="cover"
          src={`../../../public/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className="post-title">{post.titulo}</h2>

        <button className="btn-read">Ler</button>
      </div>
    </Link>
  );
};

export default PostCard;
