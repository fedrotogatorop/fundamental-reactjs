import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = () => {
    props.onSearchChange(search);
  };
  // const onSearchChange = () => {
  //   console.log("test");
  // };
  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };
  return (
    <>
      <div>
        Cari artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}></input>
        <button onClick={onSearchChange}>Find</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}
export default Search;
