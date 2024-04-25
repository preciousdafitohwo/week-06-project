import {useState, useEffect} from "react"
import './App.css'
import Instruction from "./Components/Instructions";
import Header from "./Components/Header";

export default function App () {
  // const [cookies, setCookies] = useState(0);
  // const [cps, setCps] = useState(0);
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0 // parseInt converts the string from local storage to a number
  );
  const [cps, setCps] = useState(
    parseInt(localStorage.getItem("cps")) || 0
  );
  function addCookies (){
    setCookies((currentCookies) => {
      return currentCookies + 1;
    })
  }

function buyBronze (){
  if (cookies >= 10) {
    setCps(cps + 2);
    setCookies(cookies - 10);
  } else {
    alert("Not enough cookies to buy Bronze upgrade!");
  }
}
function buySilver (){
  if (cookies >= 100) {
    setCps(cps + 5);
    setCookies(cookies - 100);
  } else {
    alert("Not enough cookies to buy Silver upgrade!");
  }
}
function buyGold (){
  if (cookies >= 1000) {
    setCps(cps + 10);
    setCookies(cookies - 1000);
  } else {
    alert("Not enough cookies to buy Gold upgrade!");
  }
}


useEffect(() => {
  const interval = setInterval(()=> {
    setCookies((currentCookies)=>currentCookies + cps)
  }, 1000/cps);
  return ()=>{
    clearInterval(interval);
  };
}, [cps]);
 

// Store cookies and cookiesPerSecond to local storage
useEffect(() => {
  localStorage.setItem("cookies", cookies.toString()); // local storage supports strings so we convert it to a string before saving it
  localStorage.setItem("cps", cps.toString());
}, [cookies, cps]);


function reset (){
  setCookies(0);
  setCps(0);
}


  return (
  
    <div className="main">
      <Header/>
      <Instruction/>
      <img src="src/assets/cook.jpg" alt="A lovely cookie" onClick={addCookies}/>
      <p>My Cookies: {cookies}</p>
      <p>My Cookie-Upgrades (cps): {cps} </p>
      <button onClick={buyBronze} className="bronze">Bronze Upgrade / 10 cookies for 2cps</button><br />
      <button onClick={buySilver} className="silver">Silver Upgrade / 100 cookies for 5cps</button><br />
      <button onClick={buyGold} className="gold">Gold Upgrade / 1000 cookies for 10cps</button><br />
      <button onClick={reset} className="reset">Reset</button>
    </div>
  
  )
}