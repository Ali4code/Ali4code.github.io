import { useEffect, useState } from "react";
import getGitHistory from "./api/git-history-api";
import SingleCommit from "./components/single commit/single-commit";
import AuthKeyForm from "./components/auth-key-form";
import { ICommitResponse } from "./api/interface-commit-respose";

function App() {
  const [commitsHistory, setCommitsHistory] = useState<ICommitResponse[]>([]);
  useEffect(() => {
    const authKey = localStorage.getItem("auth-key");
    if (!authKey) return;

    getGitHistory(authKey).then((data) => {
      setCommitsHistory(data);
      console.log(data)
    });
  }, []);

  const listOfCommits = commitsHistory?.map((item) => {
    return <SingleCommit key={item?.node_id} name={item?.commit?.committer?.name} date={item?.commit?.committer?.date} message={item?.commit?.message} />;
  });

  return (
    <div className="App">
      <AuthKeyForm />
      {listOfCommits}
    </div>
  );
}

export default App;
