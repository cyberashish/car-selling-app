import React from 'react'
import {FiUsers} from "react-icons/fi";
import {LuFuel} from "react-icons/lu";
import {IoMdSpeedometer} from "react-icons/io";
import {PiSteeringWheelDuotone} from "react-icons/pi";
import {AiOutlineHeart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function Car({img,carName,model,fuel,mileage,rent,page}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card" onClick={() => {
           navigate(`/page/${page}/${carName}`) 
      }}>
        <figure><img src={img} alt="" /></figure>
        <div className="infoBlock">
        <div className="firstBlock">
            <h1>{carName}</h1>
            <h3>{model}</h3>
        </div>
        <div className="secondBlock">
            <div className="user same">
            <FiUsers className='carIcon'/> 4 People
            </div>
            <div className="fuel same"><LuFuel className='carIcon'/> {fuel}</div>
            <div className="mileage same"><IoMdSpeedometer className='carIcon'/> {mileage}km/1-litre</div>
            <div className="feature same"><PiSteeringWheelDuotone className='carIcon'/> Automatic</div>
        </div>
        <div className="thirdBlock">
           <div className="right"><p>${rent} <span>/month</span> </p></div>
           <div className="left">
            <button className='heart'><AiOutlineHeart/></button>
            <button className='btnRent'>Rent now</button>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}
