import Classes from "./single-commit.module.css";
import { ISingleCommit } from "./interface-single-commit";

function SingleCommit(props: ISingleCommit) {
  const { message, name, date } = props;
  return <div className={`${Classes.wrapper} ${Classes.shadow}`}>
    <h3>{message}</h3>
    <div className={Classes.details}>
        <p>{date.toString()}</p>
        <p>by {name}</p>
    </div>
  </div>;
}

export default SingleCommit;
