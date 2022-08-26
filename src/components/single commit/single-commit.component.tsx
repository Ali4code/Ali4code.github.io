import Classes from "./single-commit.module.css";
import { ISingleCommit } from "./single-commit.interface";

function SingleCommit(props: ISingleCommit) {
  const { message, author, date } = props;
  return <div className={`${Classes.wrapper} ${Classes.shadow}`}>
    <h3>{message}</h3>
    <div className={Classes.details}>
        <p>{date.toString()}</p>
        <p>by {author}</p>
    </div>
  </div>;
}

export default SingleCommit;
