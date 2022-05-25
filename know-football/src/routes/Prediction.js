import '../App.css';
import SideNav from "../SideNav";
import axios from 'axios'
import {useState} from 'react'

function Prediction() {
    const [userImage, setUserImage] = useState({});
    const [club, setClub] = useState();
  
    function handleFileChange(e) {
      setUserImage(e.target.value);
      console.log(userImage)
    }

    axios
    .get('http://localhost:8080/prediction', { params: { userImage: userImage } })
    .then((res) => {
      const data = res.data.data
      const msg = `Prediction: ${data.prediction}`
      setClub(data.prediction)
    })
    
    return (
        <div className='main'>

        <SideNav/>
        <h1>Know Football</h1>
        <div className='predictionForm'>
        <form >
        <label>
          File Path:
          <input type="text" name="name" onChange={handleFileChange}/>
        </label>
      </form>

        <div className='clubPrediction'>{club}</div>
        </div>
        </div>
        )
  
  
        
    }
  
  
  
    export default Prediction