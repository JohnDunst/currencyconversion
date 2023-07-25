import React,  {useEffect, useState} from 'react';
import './App.css';
import CurrencyContainer from './CurrencyContainer'

const RATES_URL= 'https://api.vatcomply.com/rates/ HTTP/1.1' 

function App (){
 // const [moines1, setMonies1] = useState([]);
 // const [Moines2, setMonies2] = useState(1);
  const [currencyOptions, setCurrencyOptions] = useState([])



  // api url
 // const [data, setData] = useState([]);


useEffect(()=>{
    fetch(RATES_URL)
    .then(res => res.json())
    .then(data => {
  setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })



  })
 


// need if else statement for current currency and converted currency


// use states for both conversions


// two containers for conversions and currency select
return(
<>
    <h1>Convert</h1>
    <CurrencyContainer currencyOptions={currencyOptions} /> = <CurrencyContainer currencyOptions={currencyOptions} />
</>



);
}

export default App;
