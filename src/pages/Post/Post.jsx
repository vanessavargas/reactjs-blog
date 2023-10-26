import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import ReactMarkdown from "react-markdown";
import PostModelo from "../../components/ModelPost/ModelPost";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <h1>Post não encontrado...</h1>;
  }

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown__container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
