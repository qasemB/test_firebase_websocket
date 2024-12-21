import { useEffect } from "react";
import { saveData } from "./utils/writeData";
import { listenToData } from "./utils/listenData";

function App() {
  const handleSaveData = () => {
    saveData("example", { name: "Test8", value: 12388 });
  };
  useEffect(() => {
    listenToData("example", (data) => {
      console.log("Updated Data:", data);
    });
  }, []);
  return (
    <>
      hello world...
      <div>
        <button onClick={handleSaveData}>saveData</button>
      </div>
    </>
  );
}

export default App;
