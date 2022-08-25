import { useEffect, useState } from "react";
import getGitHistory from "./api/git-history-api";
import SingleCommit from "./components/single-commit";
import AuthKeyForm from "./components/auth-key-form";

function App() {
  const [commitsHistory, setCommitsHistory] = useState([]);
  useEffect(() => {
    const authKey = localStorage.getItem("auth-key");
    if (!authKey) return;

    getGitHistory(authKey).then((data) => {
      console.log(data);
    });
  }, []);

  const time = new Date("2011-04-14T16:00:49Z");

  return (
    <div className="App">
      <AuthKeyForm />
      <SingleCommit name="mamad" time={time} message="232kdsfbsdfj " />
    </div>
  );
}

export default App;
