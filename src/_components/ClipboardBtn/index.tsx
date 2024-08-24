import React, { useState, useEffect } from 'react'
import { useClipboard, cn } from 'nk-plus-antd'
import { Tooltip } from 'antd'
// @ts-ignore
import { CopyIcon, SuccessIcon } from '@components/Icon'

type propsType = {
  timeout: number
}

const copyStr = 'Fast, disk space efficient package manager.'

const ClipboardBtn: React.FC<propsType> = ({ timeout = 2000 }) => {
  const [status, setStatus] = useState<boolean>(false)
  const { copy, reset, error, copied } = useClipboard({ timeout: timeout })

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(false)
      }, timeout)
    }
  }, [status])

  return (
    <div
    className={cn(
      'flex cursor-pointer justify-start items-center',
      status ? 'text-slate-400' : 'text-slate-600'
    )}
    >
      <span className='mx-[8px]'>{copyStr}</span>
      {status ? (
            <SuccessIcon />
          ) : (
            <Tooltip placement={'top'} title={'复制'}>
              <div
                id="copyBtn"
                onClick={() => {
                  copy(copyStr)
                  setStatus(true)
                  if (copied) {
                    console.log('复制成功！')
                  }
                  if (error) {
                    setStatus(false)
                  }
                  reset()
                }}
              >
                <CopyIcon />
              </div>
            </Tooltip>
          )}
    </div>
  )
}

export default ClipboardBtn