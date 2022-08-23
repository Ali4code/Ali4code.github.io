import React, { useEffect } from "react";
import getGitHistory from "./api/GitHistoryAPI";

function App() {
  useEffect(() => {
    let authKey = "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";
    getGitHistory(authKey).then((data) => {
      console.log(data);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
