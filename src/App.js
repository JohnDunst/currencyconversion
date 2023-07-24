import React,  {useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CurrentCurrency from './CurrentCurrency';





// api url



const getInfo = () => {
axios.get('https://api.vatcomply.com/rates/ HTTP/1.1' &&	'https://api.vatcomply.com/currencies HTTP/1.1')
  const info = response.data
  console.log(info)

  useEffect(()=>{
    getInfo()
  },)

}














// need if else statement for current currency and converted currency


// use states for both conversions





function App() {
  return (
<>
<h1>Currency Conversion</h1>
<CurrentCurrency />


</>
  );
}

export default App;
