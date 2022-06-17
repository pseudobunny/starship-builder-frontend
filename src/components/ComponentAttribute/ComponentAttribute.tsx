import React from 'react'
import "../../card_styles.css"

interface CompValues {
  compName: string;
  compValue: any;
}

const ComponentAttribute : React.FC<CompValues> = ({compName, compValue}) => {
  return (
    <div className='text-center sunken-attribute text-white'>
      {compName}: {compValue}
    </div>
  )
}

export default ComponentAttribute