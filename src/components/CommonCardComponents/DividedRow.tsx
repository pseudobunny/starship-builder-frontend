import React from 'react'
import VerticalCardLine from '../CardDividers/VerticalCardLine';


interface ChildAttributes {
    first?: React.ReactNode;
    second?: React.ReactNode;
}

const DividedRow: React.FC<ChildAttributes> = ({first, second}) => {
  return (
    <div className="row pb-2">
        <div className="col align-self-center">
            <div className="text-center align-middle">
                {first}
            </div>
        </div>
        <VerticalCardLine />
        <div className="col align-self-center">
            <div className="text-center align-middle">
                {second}
            </div>
        </div>
    </div>
  )
}

export default DividedRow