import React from "react";
import { observable } from "@legendapp/state";
import { enableLegendStateReact, useComputed } from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";
import { useRef } from "react";
import { LegendToggle } from "./LegendToggle";
import RegularToggle from "./RegularToggle";

enableLegendStateReact();

const settings = observable({ enabled: false });

export default function App() {
  const legendRenderCount = ++useRef(0).current;

  // Computed text value
  const text = useComputed(() => (settings.enabled.get() ? "Yes" : "No"));

  return (
    <div className="mt-40 flex justify-center">
      <div className=" inset-0 p-4">
        <div className="text-gray-500 text-sm">
          Legend Renders: {legendRenderCount}
        </div>
        <div className="text-green-400 text-sm">

        </div>
        <div className="pt-8 pb-4">Enabled: {text}</div>
        <LegendToggle value={settings.enabled} />
      </div>
      <RegularToggle />
    </div>
  );
}
