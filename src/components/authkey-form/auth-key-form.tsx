import { useState } from "react";
import Button from "../ui/button";
import Classes from './auth-key-form.module.css'
function AuthKeyForm() {
  const [authKey, setAuthKey] = useState("");
const addKey = () => {
  if (authKey) {
    localStorage.setItem('auth-key', authKey)
    return
  }
  alert("please provide an Access Token")
}
  return (
    <form className={Classes.form} onSubmit={addKey}>
      <label htmlFor="auth-key">Enter Access Token</label>
      <input className={Classes.input} type="text" id="auth-key" value={authKey} onChange={(e)=> setAuthKey(e.target.value)}/>
      <Button type="submit">Add</Button>
    </form>
  );
}

export default AuthKeyForm;
