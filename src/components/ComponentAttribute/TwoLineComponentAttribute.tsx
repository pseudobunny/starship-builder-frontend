import React from 'react'
import "../../card_styles.css"

interface CompValues {
  compName: string;
  compValue: any;
}

const TwoLineComponentAttribute : React.FC<CompValues> = ({compName, compValue}) => {
  return (
    <div className='text-center sunken-attribute text-white'>
        <b>{compName}</b>
        <br />
        {compValue}
    </div>
  )
}

export default TwoLineComponentAttribute