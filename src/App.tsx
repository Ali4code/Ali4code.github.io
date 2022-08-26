import { useEffect, useRef, useState } from "react";
import getGitHistory from "./api/git-history.api";
import SingleCommit from "./components/single commit/single-commit.component";
import AuthKeyForm from "./components/authkey-form/auth-key-form.component";
import { ICommitResponse } from "./api/commit-respose.interface";
import Refresh from "./components/refresh/refresh.component";

function App() {
  const [commitsHistory, setCommitsHistory] = useState<ICommitResponse[]>([]);

  const [seconds, setSeconds] = useState<number>(30);
  const intervalRef = useRef<number>();

  const historyAndTimerHandler = (data: ICommitResponse[]) => {
    if (!data) {
      alert("please enter valid token");
      return;
    }
    setCommitsHistory(data);
    setSeconds(30);
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    const authKey = localStorage.getItem("auth-key");
    if (!authKey) {
      return;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    getGitHistory(authKey).then((data) => {
      historyAndTimerHandler(data);
    });

    return () => clearInterval(intervalRef.current);
  }, []);

  const refreshHandler = () => {
    const authKey = localStorage.getItem("auth-key");

    if (!authKey) {
      alert("please provide an Access token");
      return;
    }

    clearInterval(intervalRef.current);
    getGitHistory(authKey).then((data) => {
      historyAndTimerHandler(data);
    });
  };

  // to refresh when countdown finished
  if (seconds === 0) {
    clearInterval(intervalRef.current);
    refreshHandler();
  }

  const listOfCommits = commitsHistory?.map((item) => {
    return (
      <SingleCommit
        key={item?.node_id}
        author={item?.commit?.committer?.name}
        date={item?.commit?.committer?.date}
        message={item?.commit?.message}
      />
    );
  });

  return (
    <div className="App">
      <h1> Git Commit History App</h1>
      <div className="container">
        <AuthKeyForm historyAndTimerHandler={historyAndTimerHandler} />
        {commitsHistory?.length > 0 && <Refresh refreshHandler={refreshHandler} seconds={seconds} />}
      </div>
      {listOfCommits}
    </div>
  );
}

export default App;
