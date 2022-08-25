import { useState } from "react";

function AuthKeyForm() {
  const [authKey, setAuthKey] = useState("");
const addKey = () => {
  if (authKey) {
    localStorage.setItem('auth-key', authKey)
    return
  }
  alert("please provide an Authentication Key")
}
  return (
    <form onSubmit={addKey}>
      <label htmlFor="auth-key">Enter Authentication Key</label>
      <input type="text" id="auth-key" value={authKey} onChange={(e)=> setAuthKey(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
}

export default AuthKeyForm;
