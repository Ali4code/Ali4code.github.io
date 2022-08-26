import React from "react";
import Button from "../ui/button";
import { IRefresh } from "./refresh.interface";
import Classes from './refresh.module.css'

function Refresh(props: IRefresh) {
  const { refreshHandler, seconds } = props;
  return (
    <div className={Classes.container}>
      <h4>Refresh in {seconds}</h4>
      <Button onClick={refreshHandler}>Refresh</Button>
    </div>
  );
}

export default Refresh;
