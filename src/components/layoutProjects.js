import * as React from 'react'
import HeaderProjects from './headerProjects'

const LayoutProjects = ({children}) => {
  return (
    <div>
        <HeaderProjects/>
        {children}
    </div>
  )
}

export default LayoutProjects