import Post from "../../components/PostCard";
import posts from "../../json/posts.json";

const Home = () => {
  return (
    <>
      <ul className="home__posts">
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
