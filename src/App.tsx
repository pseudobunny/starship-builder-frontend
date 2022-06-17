import React from 'react';
import './App.css';
import ShieldCard from './components/ShieldCard/ShieldCard';
import ShipSizeCard from './components/ShipSizeCard/ShipSizeCard';

function App() {
  return (
    <div>
          {/* <ShipSizeCard
        sizeID={1}
        name = "Tiny"
        length = "20-60 ft"
        weight = "3-20 tons"
        actlMod={2}
        calcNum={1}
      /> */}
      <ShieldCard
        shieldId={1}
        name="Shield"
        cost={1}
        pcu={1}
        regen={1}
        totalSP={1}
      />
    </div>
    // <div className="back-image">
    //   {/* <ShieldCard
    //     shieldId={1}
    //     name="Shield"
    //     cost={1}
    //     pcu={1}
    //     regen={1}
    //     totalSP={1}
    //   /> */}
    //   <div className='ml-3 mt-3'>
    //     <ShipSizeCard
    //       sizeID={1}
    //       name = "Tiny"
    //       length = "20-60 ft"
    //       weight = "3-20 tons"
    //       actlMod={2}
    //       calcNum={1}
    //     />
    //   </div>
    // </div>
  );
}

export default App;
