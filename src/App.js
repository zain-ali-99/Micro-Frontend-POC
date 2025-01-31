import React, { useState } from "react";
import TestCompOne from "./components/TestCompOne";
import TestCompTwo from "./components/TestCompTwo";

/**
 * Main Component of the application.
 * Contains all the routing configurations
 *
 */
export default function App() {
  const [selectedAccount, setSelectedAccount] = useState();

  return (
    <div>
      <TestCompOne />
      {/* <TestCompTwo /> */}
    </div>
  );
}
