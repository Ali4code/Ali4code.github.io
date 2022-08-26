import React from "react";
import Classes from "./single-commit.module.css";
import { ISingleCommit } from "./single-commit.interface";


function SingleCommit(props: ISingleCommit) {
  const { message, author, date } = props;

  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className={`${Classes.wrapper} ${Classes.shadow}`}>
      <h3>{message}</h3>
      <div className={Classes.details}>
        <p className={Classes.date}>{formattedDate}</p>
        <p>by {author}</p>
      </div>
    </div>
  );
}

export default React.memo(SingleCommit);
