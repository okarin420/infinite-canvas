import { useRef } from "react";

import "./App.module.css";
import { ReactInfiniteCanvas } from "./App.tsx";
import { ReactInfiniteCanvasHandle } from "./canva/types/index.ts";

function App() {
  const canvasRef = useRef<ReactInfiniteCanvasHandle>();

  return (
    <div
      className="workflowContainer"
      style={{ width: "98vw", height: "98vh", background: "black" }}
    >
      <ReactInfiniteCanvas
        ref={canvasRef}
        onCanvasMount={(canvasFunc) => {
          console.log(canvasFunc);
          canvasFunc.scrollContentHorizontallyCenter({
            offset: 100,
            transitionDuration: 300,
          });
          // canvasFunc.fitContentToView({ scale: 0.5 });
        }}
      >
        <div style={{ width: "200px", height: "200px", background: "red" }}>
          asdasdsdas
        </div>
      </ReactInfiniteCanvas>
    </div>
  );
}

export default App;