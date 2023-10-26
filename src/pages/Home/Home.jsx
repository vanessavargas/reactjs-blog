import Post from "../../components/Post";
import posts from "../../json/posts.json";

const Home = () => {
  return (
    <>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
