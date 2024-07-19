import "./App.css";
import { UserProvider } from "./contexts/userContext";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <UserProvider>
      <div>
        <h1>Sign Up</h1>
        <Signup />
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
