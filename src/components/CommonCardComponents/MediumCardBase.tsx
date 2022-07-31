import React from 'react'
import '../../card_styles.css'

interface CardBodyProps {
    cardBody?: React.ReactNode;
}

const MediumCardBase: React.FC<CardBodyProps> = (props) => {
  const { cardBody } = props;
    
  return (
    <div className="card rounded-0 m-3 more-card sci-fi-card medium-card text-white">
        <div className="card-body pb-0">
            {cardBody}
        </div>
    </div>
  )
}

export default MediumCardBase
