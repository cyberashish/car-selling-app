import React, { useState } from 'react';
import {FiSearch , FiArrowLeft , FiArrowRight} from "react-icons/fi";
import {BsChevronDown} from "react-icons/bs";
import CarData from "./../Data.json"
import Car from './Car';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function CarPage() {
    // console.log(CarData);
    let {page} = useParams();
    const[text , setText] = useState("");
    const[pages , setPages] = useState(page);
    const[allCarData , setCarData] = useState(CarData);
    console.log(page)
    let finalCarData = allCarData.slice((pages-1)*6 , pages*6);
    const navigate = useNavigate();
    const handleSearch = (e) => {
      let newData = e.target.value;
      setText(newData);
    let filteredData =  CarData.filter((elem) => {
      return elem.carName.toLowerCase().includes(newData);
     })
     console.log(filteredData);
     let counter = filteredData.length/6;
     if(counter<page){
       setPages(1);
       navigate(`/page/1`)
     }
     setCarData(filteredData);
 }
 let a =0;


  return (
    <>
       <div className="carSearch">
       <header>
           <div className="getInfo">
           <div className="search">
            <input type="text" placeholder='Search...' value={text} onChange={handleSearch} />
            <FiSearch className='searchIcon' />
        </div>
        <div className="relevance">
            <h1>Relevance <BsChevronDown className='down'/></h1>
            
        </div>
        <div className="brands">
            <h1>All brands <BsChevronDown className='down'/></h1>      
        </div>
        <button className='home' onClick={() => {navigate("/")}}>Back to Home</button>
           </div>
    </header>
    <div className="carSection">
        {finalCarData.map((rentalCar) => {
            return (<Car key={rentalCar.carId} img={rentalCar.imgUrl} carName={rentalCar.carName} model={rentalCar.modelYear} fuel={rentalCar.fuelType} mileage={rentalCar.mileage} page={pages} rent={rentalCar.rent}/>)
        })}
    </div>
    <footer>
           <div className="getInfo">
             <div className="pgn">
                <div className="left" onClick={() => {
                    if(page>1){
                        page=page-1;
                        navigate(`/page/${page}`)
                    }
                    else{
                        page=1;
                        navigate('/page/1')
                    }
                }}><FiArrowLeft /></div>
             <ul>
              {allCarData.map((elem,index) => {
                if(index%6===0){
                   a++;
                  return( <li key={index}><button onClick={(e) => {page = e.target.innerHTML;
                    setPages(page);
                    navigate(`/page/${page}`)}}>{a}</button></li>)
                }
                else{
                  return (null)
                }
              })}

            </ul>
           <div className="right" onClick={() => {
             if(page<10){
                page = page+1;
                navigate(`/page/${page}`)
             }
             else{
                page=10;
                navigate("/page/10")
             }
           }}> <FiArrowRight /></div>
             </div>
           </div>
    </footer>
       </div>
    </>
  )
}
