import React from 'react'
import ComponentAttribute from '../ComponentAttribute/ComponentAttribute';

interface Costs {
    BP: number;
    PCU: number;
}

const CostRow: React.FC<Costs> = ({BP, PCU}) => {
  return (
    <div className="row pb-2">
        <div className="col">
            <div className="text-center">
                <ComponentAttribute compName='BP' compValue={BP}/>
            </div>
        </div>
        <div className="col">
            <div className="text-center">
                <ComponentAttribute compName='PCU' compValue={PCU}/>
            </div>
        </div>
    </div>
  )
}

export default CostRow