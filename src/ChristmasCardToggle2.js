import { useRef } from "react";
import { reactive, useObservable } from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";
import { motion } from "framer-motion";
import { observable } from "@legendapp/state";

const MotionDiv$ = reactive(motion.div);

export default function ChristmasCardToggle2() {
  const renderCount = ++useRef(0).current;

  const state2 = observable({
    showSidebar: false,
  });

  const animPosition = () => ({
    width: state2.showSidebar.get() ? 200 : 0,
  });

  return (
    <div className="flex row justify-between">
      <div className="flex-1 p-4">
        <div className="text-gray-500  text-lg pb-4">
          Renders: {renderCount}
        </div>

        <div>
          <button onClick={state2.showSidebar.toggle}>
            <img src="./christmas-tree.jpg" height={100} width={100} />
          </button>
        </div>
      </div>
      <MotionDiv$
        className="text-center  pt-2 text-white text-sm h-[100px] w-[100px]"
        initial$={animPosition}
        animate$={animPosition}
      >
        <img
          src="./hangover.jpeg"
          height={150}
          className="rounded-md shadow-md "
        />
      </MotionDiv$>
    </div>
  );
}
