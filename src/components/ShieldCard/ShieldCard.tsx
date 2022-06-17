import React from 'react'
import "../../card_styles.css"

import HorizontalCardLine from '../CardDividers/HorizontalCardLine'
import CardTitle from '../CommonCardComponents/CardTitle'
import CostRow from '../CommonCardComponents/CostRow'
import DividedRow from '../CommonCardComponents/DividedRow'
import MediumCardBase from '../CommonCardComponents/MediumCardBase'
import TwoLineComponentAttribute from '../ComponentAttribute/TwoLineComponentAttribute'
import ShipSizeCard from '../ShipSizeCard/ShipSizeCard'

interface ShieldDetails {
    shieldId: number,
    name: string,
    cost: number,
    pcu: number,
    regen: number,
    totalSP: number
}

const ShieldCard: React.FC<ShieldDetails> = 
    ({name, cost, pcu, regen, totalSP})  => 
{
  const regenStr = `${regen}/min`;

  return (
    <MediumCardBase cardBody = {
        <div>
            <CardTitle title={name}/>
            <CostRow BP={cost} PCU={pcu}/>
            <HorizontalCardLine />
            <div className='ship-size-container mb-3'>
              <ShipSizeCard
                sizeID={1}
                name = "Tiny"
                length = "20-60 ft"
                weight = "3-20 tons"
                actlMod={2}
                calcNum={1}
              /> 
            </div>
            <HorizontalCardLine />
            <DividedRow 
              first = {
                <TwoLineComponentAttribute
                  compName='Total SP'
                  compValue={totalSP}
                />
              }
              second = {
                <TwoLineComponentAttribute
                  compName='Regen'
                  compValue={regenStr}
                />
              }
            />
        </div>
    }/>
  )
}

export default ShieldCard