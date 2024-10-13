import { useRef } from 'react'
import { useSyncScrolling } from 'nk-plus-antd'

const SyncScrollingDemo = () => {
  const docLeft = useRef<HTMLDivElement>(null)
  const docRight = useRef<HTMLDivElement>(null)

  useSyncScrolling(docLeft, docRight)

  return (
    <div className="flex">
      <div
        data-testid="left"
        ref={docLeft}
        className="bg-slate-800 text-white overflow-auto w-[500px] h-[500px]"
      >
        <div className='w-[800px] h-[800px] p-[16px]'>Left</div>
      </div>
      <div
        data-testid="right"
        className="bg-yellow-600 text-white  overflow-auto w-[500px] h-[500px]"
        ref={docRight}
      >
        <div className='w-[800px] h-[800px] p-[16px]'>right</div>
      </div>
    </div>
  )
}

export default SyncScrollingDemo
