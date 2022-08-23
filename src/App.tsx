import { useEffect } from "react";
import getGitHistory from "./api/git-history-api";

function App() {
  let authKey = "from input to fill";
  useEffect(() => {
    getGitHistory(authKey).then((data) => {
      console.log(data);
    });
  }, [authKey]);

  return <div className="App"></div>;
}

export default App;
