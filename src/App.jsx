import {  useState } from "react";
import { saveData } from "./utils/writeData";
import { listenToData, stopListeningToData } from "./utils/listenData";

function App() {
  const [value, setValue] = useState("");
  const [id, setId] = useState(generateRandomSixDigitNumber());
  const [listenTo, setListenTo] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSaveData = () => {
    saveData(id.toString(), { text: value });
  };

  const handleListen = () => {
    if (listenTo) {
      stopListeningToData();
      listenToData(listenTo, (data) => {
        if (data) {
          console.log("Received Data:", data);
          alert(data.text);
        }
      });
      setIsListening(true);
    }
  };

  const handleStop = () => {
    stopListeningToData(listenTo);
    setIsListening(false);
  };

  return (
    <>
      <div>
        id:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          disabled
        />
        <button onClick={() => setId(generateRandomSixDigitNumber())}>
          generate
        </button>
      </div>

      <hr />
      <div>
        listen to:
        <input
          type="text"
          value={listenTo}
          onChange={(e) => setListenTo(e.target.value)}
        />
        <button onClick={isListening ? handleStop : handleListen}>
          {isListening ? "stop" : "start listening"}
        </button>
      </div>

      <hr />

      <div>
        message:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSaveData}>saveData</button>
      </div>
    </>
  );
}

export default App;

function generateRandomSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}
