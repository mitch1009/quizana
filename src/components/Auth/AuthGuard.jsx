import { useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthGuard = ({ kids }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        return;
      }

      return unsubscribe;
    });
  });
  return <AuthContext.Provider value={user}>{kids}</AuthContext.Provider>;
};
