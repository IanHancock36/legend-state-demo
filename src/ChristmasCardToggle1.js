import { useRef } from "react";
import { reactive } from "@legendapp/state/react";
import { motion } from "framer-motion";
import { observable } from "@legendapp/state";

const MotionDiv$ = reactive(motion.div);

export default function ChristmasCardToggle1() {
  const renderCount = ++useRef(0).current;

  const state1 = observable({
    showSidebar: false,
  });

  const animPosition = () => ({
    width: state1.showSidebar.get() ? 200 : 0,
  });

  return (
    <div className="flex row justify-between">
      <div className="flex-1 p-4">
      <div className=" text-white mb-10 font-mono text-[24px]">1ST DAY</div>
        <div className="text-white text-xl pb-6">Renders: {renderCount}</div>

        <div>
          <button onClick={state1.showSidebar.toggle}>
            <img
              src="./christmas-tree.jpg"
              height={100}
              width={100}
              className=" border rounded-md shadow-md bg-transparent"
            />
          </button>
        </div>
      </div>
      <MotionDiv$
        className="text-center  pt-2 text-white text-sm h-[100px] w-[100px]"
        initial$={animPosition}
        animate$={animPosition}
      >
        <img
          src="./airmax-camo.jpeg"
          height={150}
          className="rounded-md shadow-md "
        />
      </MotionDiv$>
    </div>
  );
}
