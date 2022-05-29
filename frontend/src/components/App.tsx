import React, { useEffect } from "react";
import MineField from "./MineField";
import MineCell from "./MineCell";


const App = () => {

  const cells = [...Array(25).keys()].map(item => <MineCell index={item}/>);

  return (
    <MineField>
      {cells}
    </MineField>
  );
};

export default App;
