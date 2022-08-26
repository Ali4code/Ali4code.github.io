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

  useEffect(() => {
    const authKey = localStorage.getItem("auth-key");
    if (!authKey) {
      return;
    }
    getGitHistory(authKey).then((data) => {
      setCommitsHistory(data);
    });

    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

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
      setCommitsHistory(data);
      setSeconds(30);
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
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
        <AuthKeyForm />
        <Refresh refreshHandler={refreshHandler} seconds={seconds} />
      </div>
      {listOfCommits}
    </div>
  );
}

export default App;
