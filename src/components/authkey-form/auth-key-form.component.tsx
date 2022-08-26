import { useState } from "react";
import { ICommitResponse } from "../../api/commit-respose.interface";
import getGitHistory from "../../api/git-history.api";
import Button from "../ui/button";
import Classes from "./auth-key-form.module.css";

function AuthKeyForm({ historyAndTimerHandler }: { historyAndTimerHandler: (data: ICommitResponse[]) => void }) {
  const [authKey, setAuthKey] = useState("");

  const addKey = (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    if (!authKey) {
      alert("please provide an Access Token");
      return;
    }
    getGitHistory(authKey).then((data) => {
      historyAndTimerHandler(data);
    });
    localStorage.setItem("auth-key", authKey);
    setAuthKey("");
  };
  return (
    <form className={Classes.form} onSubmit={addKey}>
      <label htmlFor="auth-key">Enter Access Token</label>
      <input className={Classes.input} type="text" id="auth-key" value={authKey} onChange={(e) => setAuthKey(e.target.value)} />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default AuthKeyForm;
