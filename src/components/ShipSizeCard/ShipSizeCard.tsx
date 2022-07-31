//import React, {useState, useRef} from 'react'
import "../../card_styles.css"

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'

import HorizontalCardLine from '../CardDividers/HorizontalCardLine'
import CardTitle from '../CommonCardComponents/CardTitle'
import PopoverMediumCardBase from '../CommonCardComponents/PopoverMediumBase'
import SingleRow from '../CommonCardComponents/SingleRow'
import TwoLineComponentAttribute from '../ComponentAttribute/TwoLineComponentAttribute'

interface ShipSizeDetails {
    sizeID: number,
    name: string,
    actlMod: number,
    length: string,
    weight: string,
    calcNum: number
}

const ShipSizeCard: React.FC<ShipSizeDetails> = 
    ({sizeID, name, actlMod, length, weight, calcNum})  => 
{
  const popoverBody = (
    <Popover id="popover-basic" className = "sci-fi-card p-1">
        {/*<Popover.Content>*/}
            <PopoverMediumCardBase cardBody = {
            <div>
                <CardTitle title={name}/>
                <SingleRow first={
                    <TwoLineComponentAttribute
                        compName='Length'
                        compValue={length}
                    />
                }/>
                <HorizontalCardLine />
                <SingleRow first={
                    <TwoLineComponentAttribute
                        compName='Weight'
                        compValue={weight}
                    />
                }/>
                <HorizontalCardLine />
                <SingleRow first={
                    <TwoLineComponentAttribute
                        compName='AC and TL Mod.'
                        compValue={actlMod}
                    />
                }/>
                <HorizontalCardLine />
                <SingleRow first={
                    <TwoLineComponentAttribute
                        compName='RankForCalculations'
                        compValue={calcNum}
                    />
                }/>
            </div>
            }/>
        {/*</Popover.Content>*/}
    </Popover>
    );

  return (
    <OverlayTrigger
        placement='bottom'
        overlay={popoverBody}
        delay={{show: 100, hide: 100}}
    >
        <Button
        className='btn btn-sci-fi'
        >
        {name}
        </Button>
    </OverlayTrigger>
  )
}

export default ShipSizeCard
