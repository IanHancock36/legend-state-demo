import { useState, useRef } from 'react'
import { Switch } from '@headlessui/react'

const RegularToggle=()=> {
  const [enabled, setEnabled] = useState(false)
  const regularRenders = ++useRef(0).current

  return (
    <div>
        <div>

        Regular Renders: {regularRenders}
        Performance : {performance.now(regularRenders)}
        </div>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-pink-500' : 'bg-cyan-700'
      } relative inline-flex h-8 w-14 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white transition`}
      />
    </Switch>
    </div>
  )
}
export default RegularToggle