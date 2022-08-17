import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Hello From React");
  }, []);

  return (
    <>
      <h1>Boilerplate</h1>
      <h2>{message}</h2>
    </>
  );
};

export default App;
