import React, {useState, useRef} from 'react'
import "../../card_styles.css"

import Overlay from 'react-bootstrap/Overlay'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'

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
  const [show, setShow] = useState(false)
  const target = useRef(null)

  const popoverBody = () =>
    <Tooltip id="tooltip-bottom">
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
    </Tooltip>
    ;

  return (
    //   <OverlayTrigger
    //     placement='bottom'
    //     overlay={popoverBody}
    //     delay={{show: 100, hide: 100}}
    //   >
    //     <Button
    //       className='btn btn-sci-fi'
    //     >
    //     {name}
    //     </Button>
    //   </OverlayTrigger>
    <div>
        <Button 
            className='btn btn-sci-fi'
            ref={target}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
        {name}
        </Button>
        <Overlay
            ref={target}
            target={target.current}
            show={show}
            placement='right'
        >
            {popoverBody}
        </Overlay>
    </div>
  )
}

export default ShipSizeCard