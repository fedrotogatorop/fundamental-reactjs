import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };
  //   const [search, setSearch] = useState("");
  //   const changeSearch = (event) => {
  //     setSearch(event.target.value);
  //     props.changeSearch(event.target.value);
  //   };

  return (
    <>
      <div>
        Cari artikel : <input onChange={onSearchChange}></input>
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
    </>
  );
}
export default Search;
