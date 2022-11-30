import { useState, useEffect } from "react";
import UserMain from "./Components/UserMain";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="loader-span-sty">
      {loading ? (
        <RingLoader
          size={150}
          color={"rgba(255, 255, 255, 1)"}
          loading={loading}
        />
      ) : (
        <div className="main-container">
          <UserMain />
        </div>
      )
      }
    </div>
  );
}

export default App;
