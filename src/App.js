import React, { useState } from "react";
import TestCompOne from "./components/TestCompOne";
import TestCompTwo from "./components/TestCompTwo";

export default function App() {
  const [selectedAccount, setSelectedAccount] = useState();

  return (
    <div>
      <TestCompOne />
      {/* <TestCompTwo /> */}
    </div>
  );
}
