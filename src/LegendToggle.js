import { reactive } from '@legendapp/state/react'
import { motion } from "framer-motion"

const MotionDiv$ = reactive(motion.div)

export function LegendToggle({ value }) {
  return (
    <MotionDiv$
      className="border border-gray-200 rounded-full select-none"
      animate$={() => ({
        backgroundColor: value.get() ? '#6ACB6C' : '#C4D1E3'
      })}
      style={{ width: 64, height: 32 }}
      onClick={value.toggle}
      
    >
  
      <MotionDiv$
        className="bg-white rounded-full shadow"
        style={{ width: 24, height: 24, marginTop: 3 }}
        animate$={() => ({
          x: value.get() ? 32 : 6
        })}
      />
     
    </MotionDiv$>
  )
}