import React from "react";
import { observable } from "@legendapp/state";

import { enableLegendStateReact, useComputed } from "@legendapp/state/react";
import { useRef } from "react";
import { LegendToggle } from "./LegendToggle";
import RegularToggle from "./RegularToggle";
import ChristmasCardToggle1 from "./ChristmasCardToggle1";
import ChristmasCardToggle2 from "./ChristmasCardToggle2";
import ChristmasCardToggle3 from "./ChristmasCardToggle3";
import ChristmasCardToggle4 from "./ChristmasCardToggle4";
import ChristmasCardToggle5 from "./ChristmasCardToggle5";
import ChristmasCardToggle6 from "./ChristmasCardToggle6";
import ChristmasCardToggle7 from "./ChristmasCardToggle7";

enableLegendStateReact();
const legendSettings = observable({ enabled: false });
const settings = observable({ flipped: false });

export default function App() {
  const legendRenderCount = ++useRef(0).current;

  return (
    <div className=" bg-[#0F8A5F] h-[100vh] mb-20">
      <div className="text-[36px] text-white font-mono text-center p-20 ">
        Last Week Of Christmas
      </div>
      <div className=" bg-[#0F8A5F] flex justify-center">
        {/* <ChristmasCountDown/> */}
        {/* <div className=" inset-0 p-4"> */}
        {/* <div className="text-gray-500 text-md">
          Legend State Renders: {legendRenderCount}
          Legend Performance : {performance.now(legendRenderCount)}
        </div>
        <RegularToggle />
        <div className="mb-6">
          <LegendToggle value={legendSettings.enabled} />
        </div>
        <div className="flex row">
          <ChristmasCard2 settings={settings.flipped}/>
          
        </div>
   
      </div> */}

        <div className="flex row justify-between">
          <ChristmasCardToggle1 />

          <ChristmasCardToggle2 />

          <ChristmasCardToggle3 />

          <ChristmasCardToggle4 />

          <ChristmasCardToggle5 />

          <ChristmasCardToggle6 />

          <ChristmasCardToggle7 />
        </div>
      </div>
    </div>
  );
}
