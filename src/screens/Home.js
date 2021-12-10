import {isDarkModeVar, isLoggedInVar} from "../apollo";

function Home(){
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=> isLoggedInVar(false)}>Log out now!</button><br/>
      <button onClick={()=> isDarkModeVar(true)}>to dark</button>
      <button onClick={()=> isDarkModeVar(false)}>to light</button>
    </div>
  )
}
export default Home; 