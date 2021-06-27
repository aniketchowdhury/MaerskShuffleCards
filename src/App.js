import './App.css';
import {React, useState, Fragment} from "react";

function App() {
  let arr=[1,2,3,4,5,6,7,8,9];
  let colorList = ["#72c3dc", "#2b8ead", "#6f98a8", "#bfbfbf", "#2f454e", "#333333"]
  const [mainArr, setMainArr]= useState(arr);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function shuffle() {
    let array = [...mainArr];
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setMainArr(array)
  }

  const sort=()=>{
    let arr = [...mainArr];
    arr.sort();
    setMainArr(arr);
  }
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
      </header>
      <div className="numberContainer" style={{display:"flex", flexWrap:"wrap",width:"auto", height:"auto", alignContent:"flex-start"}}>
          {mainArr.map((item, index)=>(
            <div className="numberTile" style={{backgroundColor:colorList[getRandomInt(5)],flexGrow:"1", display:"flex", flexDirection:"column", border:"1px solid black", width:"25%", height:"35%"}} key={index}>
              <div style={{margin:"auto", color:"white",fontSize:"100px", fontWeight:"600"}}>{item}</div>
              </div>
          ))}
      </div>
      <div style={{display:"flex", flexDirection:"column",margin:"30px auto"}}>
        <button onClick={shuffle} style={{width:"20vw", height:"3rem", borderRadius:"7px", backgroundColor:colorList[0], borderBottom:"5px solid #2b8ead",color:"white"}}>Shuffle</button>
        <button onClick={sort} style={{width:"20vw", height:"3rem",borderRadius:"7px", marginTop:"30px",backgroundColor:colorList[0],borderBottom:"5px solid #2b8ead",color:"white"}}>Sort</button>
      </div>
    </div>
    <div style={{textAlign:"center", marginTop:"50px", fontStyle:"italic"}}>Shuffle and sort by Aniket</div>
    </Fragment>
  );
}

export default App;
