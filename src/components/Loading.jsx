import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loading = () => {
    const [progress, setProgress] = useState(50)
  return (
    <div className='w-1'>
        <LoadingBar
        color='orange'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}

export default Loading