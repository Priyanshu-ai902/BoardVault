import React from 'react'

const organization = ({params}) => {
    const {orgId} = params
  return (
    <div>
      {orgId}
    </div>
  )
}

export default organization
