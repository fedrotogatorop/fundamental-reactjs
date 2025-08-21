const NewArticle = () => {
  return <span>-- Baru !!</span>;
};
function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <h3>{props.name}</h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(", ")}{" "}
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}
export default Article;
