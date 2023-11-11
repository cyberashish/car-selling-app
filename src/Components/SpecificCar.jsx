import React from 'react'
import {FiUsers} from "react-icons/fi";
import {LuFuel} from "react-icons/lu";
import {IoMdSpeedometer} from "react-icons/io";
import {PiSteeringWheelDuotone} from "react-icons/pi";

export default function SpecificCar({img,carName,model,fuel,mileage,rent}) {
  return (
    <>
      <div className="detail">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <h1>{carName} <span>{model}</span></h1>
         <h2>${rent} <span>/month</span></h2>
         <div className="secondBlock">
            <div className="user same">
            <FiUsers className='carIcon'/> 4 People
            </div>
            <div className="fuel same"><LuFuel className='carIcon'/> {fuel}</div>
            <div className="mileage same"><IoMdSpeedometer className='carIcon'/> {mileage}km/1-litre</div>
            <div className="feature same"><PiSteeringWheelDuotone className='carIcon'/> Automatic</div>
        </div>
         <button>Check Complete Offers</button>
      </div>
      </div>
    </>
  )
}
