import React from 'react'

interface CardBodyProps {
    cardBody?: React.ReactNode;
}

const PopoverMediumCardBase: React.FC<CardBodyProps> = (props) => {
  const { cardBody } = props;
    
  return (
    <div className="card rounded-0 ml-1 mt-2 mb-2 more-card sci-fi-card medium-card text-white">
        <div className="card-body pb-0">
            {cardBody}
        </div>
    </div>
  )
}

export default PopoverMediumCardBase