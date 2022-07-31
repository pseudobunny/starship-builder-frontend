import React from 'react'
//import VerticalCardLine from '../CardDividers/VerticalCardLine';


interface ChildAttributes {
    first?: React.ReactNode;
}

const SingleRow: React.FC<ChildAttributes> = ({first}) => {
  return (
    <div className="row justify-content-center pb-2">
        <div className="col-auto">
            <div className="text-center">
                {first}
            </div>
        </div>
    </div>
  )
}

export default SingleRow
