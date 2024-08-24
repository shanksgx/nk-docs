import React from "react"
import { TextEllipsis, cn } from 'nk-plus-antd'

const TextEllipsisDemo: React.FC<{ isExceed: boolean }> = ({ isExceed }) => {
  return (
    <div 
      className={cn(
        "h-[24px] border border-gray-100 truncate",
        isExceed ? "w-[250px]" : "w-[600px]"
      )}
    >
      <TextEllipsis 
        text={'This is a component with text exceeding the displayed tooltip.'}
        hover
        placement={'top'}
      />
    </div>
  )
}

export default TextEllipsisDemo