import { useState } from "react";
import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";
function HomePage() {
  //   const [posts, setPosts] = useState([postsData]);
  //   const onSearchChange = (value) => {
  //     const filteredPosts = postsData.filter((item) =>
  //       item.title.includes(value)
  //     );
  //     setPosts(filteredPosts);
  //   };

  const [posts, setPosts] = useState(postsData);
  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      {/* <Search onSearchChange={onSearchChange} /> */}
      <Search onSearchChange={onSearchChange} />
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article {...props} key={index} /> //spread atribut
      ))}
    </>
  );
}
export default HomePage;
