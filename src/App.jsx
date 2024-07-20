import "./App.css";
import { UserProvider } from "./contexts/userContext";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <UserProvider>
      <div>
        <Signup />
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
