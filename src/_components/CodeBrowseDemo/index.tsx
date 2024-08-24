import React from "react"
import { CodeBrowse } from 'nk-plus-antd'

const code = `
  import React from 'react'
  import { AntdRegistry } from '@ant-design/nextjs-registry'

  const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )

  export default RootLayout
`

const CodeBrowseDemo: React.FC = () => {
  return (
    <div className="w-full">
      <CodeBrowse
        code={code} 
        title={'bower.tsx'}
      />
    </div>
  )
}

export default CodeBrowseDemo