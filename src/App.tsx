import React from "react"
import PadBank from "./features/drum/PadBank"
import Display from "./features/drum/Display"

function App() {
  return (
    <div className="App container">
      <div id="drum-machine" className="d-flex align-items-center justify-content-center vh-100">
        <div className="border border-1 border-secondary bg-secondary-subtle p-3 rounded-3"
             style={{width: 500}}>
          <div className="row">
            <div className="col-6 col-md-8">
              <PadBank />
            </div>
            <div className="col-6 col-md-4">
              <h6 className="fst-italic text-center mb-3">Drum Machine</h6>

              <div className="controls-container w-100 border border-1 border-secondary bg-white px-3 py-2 text-center rounded-3"
                   style={{minHeight: 45}}>
                <Display />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
