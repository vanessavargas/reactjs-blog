import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import ReactMarkdown from "react-markdown";
import NotFound from "../NotFound";
import ModelPost from "../../components/ModelPost";
import DefaultPage from "../DefaultPage";
import PostCard from "../../components/PostCard";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <ModelPost
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post__markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className="post__title-other-posts">
                Outros posts que você pode gostar:
              </h2>

              <ul className="post__posts-recommended">
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
