function Article() {
  const name = "Fedro";
  const titles = ["tutorial reactjs", "tutorial NodeJS", "tutorial NextJS"];

  // titles.map(item=>items)
  return (
    <>
      <div>{name}</div>
      <div>
        {titles.map((title) => {
          return (
            <>
              <div>{title}</div>
              <div>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Article;
