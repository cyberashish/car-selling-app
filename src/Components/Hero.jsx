import React from 'react'
import {FaCarSide} from "react-icons/fa";
import {FiChevronsRight} from "react-icons/fi";
import {BiSolidChevronsUp} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
export default function Hero() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/page/1")
  }
  return (
    <>
    <div className="navigation">
        <div className="left"><FaCarSide className='carIcon'/> <div className="brand"><h1>Car</h1>
        <h3>Rental</h3></div></div>
        <div className="right">
            <h2>Sign In</h2>
            <button>Rental Cars</button>
        </div>
    </div>
      <div className="masterContainer">
        <div className="left">
            <h2>Plan your trip now</h2>
            <h1>Save <span>big</span> with our car rental</h1>
            <p>Rent the car of your dream.Unbeatable prices,unlimited miles,flexible pickup options and much more.</p>
            <button onClick={handleNavigation} className='goSearch'>See our Cars <FiChevronsRight className='arrow'/></button>
        </div>
        <div className="right">
            <img src="https://i.ibb.co/mzDTbkY/car-png-16835-1.png" alt="" />
        </div>
      </div>
      <div className="notice">
        <BiSolidChevronsUp className="noticeArrow"/>
         <p>Click <span>"see our cars"</span> button to reach car search section , where you find all list of cars.</p>
      </div>
    </>
  )
}
