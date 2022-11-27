import { useState } from "react";
import axios from "../../service/axios";

function Home() {
  //Testing connection with API
  const [name, setName] = useState("");

  const handleTest = async () => {
    try {
      console.log("Kenny tets");
      const { data } = await axios.get("/items");
      console.log(data.name);
      setName(data.name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <h2>{name}</h2>
      <button onClick={handleTest}>Test</button>
    </div>
  );
}
export default Home;
