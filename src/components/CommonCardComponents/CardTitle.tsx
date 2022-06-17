import React from 'react'
import HorizontalCardLine from '../CardDividers/HorizontalCardLine'

interface cardTitle {
    title: string
}

const CardTitle: React.FC<cardTitle> = ({title}) => {
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-auto">
                <h4 className="text-center"><b>{title}</b></h4>
            </div>
        </div>
        <HorizontalCardLine />
    </div>
  )
}

export default CardTitle