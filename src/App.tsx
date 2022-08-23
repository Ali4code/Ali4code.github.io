import { useEffect } from "react";
import getGitHistory from "./api/git-history-api";
import SingleCommit from "./components/single-commit";

function App() {
  let authKey = "from input to fill";
  useEffect(() => {
    getGitHistory(authKey).then((data) => {
      console.log(data);
    });
  }, [authKey]);
  
  const time = new Date("2011-04-14T16:00:49Z")

  return (
    <div className="App">
      <SingleCommit name="mamad" time={time} message="232kdsfbsdfj " />
    </div>
  );
}

export default App;
