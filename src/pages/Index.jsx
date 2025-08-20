import { use, useEffect, useState } from "react";
import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";
function HomePage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);
  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log("Ada post baru");
  }, [posts]);

  useEffect(() => {
    console.log("render");
  });
  return (
    <>
      <h1>Simple Blog</h1>
      {/* <Search onSearchChange={onSearchChange} /> */}
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...props} key={index} /> //spread atribut
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}
export default HomePage;
