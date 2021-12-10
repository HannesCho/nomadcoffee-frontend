import {isLoggedInVar,isDarkModeVar} from "../apollo";

function Login(){
  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=> isLoggedInVar(true)}>Log in now!</button><br/>
      <button onClick={()=> isDarkModeVar(true)}>to dark</button>
      <button onClick={()=> isDarkModeVar(false)}>to light</button>
    </div>
  )
}
export default Login; 