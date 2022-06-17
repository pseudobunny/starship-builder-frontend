import React from 'react'
//import VerticalCardLine from '../CardDividers/VerticalCardLine';


interface ChildAttributes {
    first?: React.ReactNode;
}

const SingleRow: React.FC<ChildAttributes> = ({first}) => {
  return (
    <div className="row justify-content-center">
        <div className="col-auto">
            <div className="text-center">
                {first}
            </div>
        </div>
    </div>
  )
}

export default SingleRow