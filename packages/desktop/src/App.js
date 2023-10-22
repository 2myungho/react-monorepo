import React from "react";
import commonStyle from "common/src/styles/desktop";
import { Button } from "antd";

function App() {
  return (
    <div style={commonStyle.container}>
      <Button>desktop</Button>
      <p style={commonStyle.text}>Hello from Desktop!</p>
    </div>
  );
}

export default App;
