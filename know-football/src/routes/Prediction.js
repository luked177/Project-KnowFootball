import '../App.css';
import SideNav from "../SideNav";
import axios from 'axios'
import {useState} from 'react'
//Premier League Logos (2022). Available from https://logotyp.us/ [accessed 25 May 2022].
import arsenal from "../assets/arsenal.svg"
import astonvilla from "../assets/astonvilla.svg"
import brentford from "../assets/brentford.svg"
import brighton from "../assets/brighton.svg"
import burnley from "../assets/burnley.svg"
import chelsea from "../assets/chelsea.svg"
import crystalpalace from "../assets/crystalpalace.svg"
import everton from "../assets/everton.svg"
import leeds from "../assets/leeds.svg"
import leicester from "../assets/leicester.svg"
import liverpool from "../assets/liverpool.svg"
import mancity from "../assets/mancity.svg"
import manunited from "../assets/manunited.svg"
import newcastle from "../assets/newcastle.svg"
import norwich from "../assets/norwich.svg"
import southampton from "../assets/southampton.svg"
import spurs from "../assets/spurs.svg"
import watford from "../assets/watford.svg"
import westham from "../assets/westham.svg"
import wolves from "../assets/wolves.svg"
import TabPanel, {Item} from 'devextreme-react/tab-panel';
import Form, { SimpleItem } from "devextreme-react/form";

function Prediction() {
    const [userImage, setUserImage] = useState();
    const [club, setClub] = useState("Choose a Badge");
    let [badge, setBadge] = useState();
  
    function handleFileChange(e) {
      setUserImage(e.target.value);
      console.log(userImage)
      if (isNaN(e.value)) {
        setClub = "Choose a Badge"
      }
    }

    axios
    .get('http://localhost:8080/prediction', { params: { userImage: userImage } })
    .then((res) => {
      const data = res.data.data
      const msg = `Prediction: ${data.prediction}`
      setClub(data.prediction)
    })

    if (club === "Arsenal"){
      badge = arsenal;
      console.log({badge})
    }

    if (club === "Aston Villa"){
      badge = astonvilla;
      console.log({badge})
    }

    if (club === "Brentford"){
      badge = brentford;
      console.log({badge})
    }

    if (club === "Brighton & Hove Albion"){
      badge = brighton;
      console.log({badge})
    }

    if (club === "Burnley"){
      badge = burnley;
      console.log({badge})
    }

    if (club === "Chelsea"){
      badge = chelsea;
      console.log({badge})
    }

    if (club === "Crystal Palace"){
      badge = crystalpalace;
      console.log({badge})
    }

    if (club === "Everton"){
      badge = everton;
      console.log({badge})
    }

    if (club === "Leeds"){
      badge = leeds;
      console.log({badge})
    }

    if (club === "Leicester"){
      badge = leicester;
      console.log({badge})
    }
    
    if (club === "Liverpool"){
      badge = liverpool;
      console.log({badge})
    }

    if (club === "Manchester City"){
      badge = mancity;
      console.log({badge})
    }

    if (club === "Manchester United"){
      badge = manunited;
      console.log({badge})
    }

    if (club === "Newcastle"){
      badge = newcastle;
      console.log({badge})
    }

    if (club === "Norwich"){
      badge = norwich;
      console.log({badge})
    }

    if (club === "Southampton"){
      badge = southampton;
      console.log({badge})
    }

    if (club === "Tottenham"){
      badge = spurs;
      console.log({badge})
    }

    if (club === "Watford"){
      badge = watford;
      console.log({badge})
    }

    if (club === "West Ham"){
      badge = westham;
      console.log({badge})
    }

    if (club === "Wolverhampton Wanderers"){
      badge = wolves;
      console.log({badge})
    }


    return (
        <div className='main'>

        <SideNav/>
        <header>
        <h1>Know Football</h1>
        </header>
        <div className='predictionForm'>
        <form >
        <label>
          File Path:
          <input type="text" name="name" onChange={handleFileChange}/>
        </label>
      </form>

        <div className='clubPrediction'>
          <p>{club}</p>
        <img className='badgeImage' src={badge} />
        </div>
        </div>
        <footer>
            <p className='title'>
                Know Football - MComp Project
            </p>
              <p className='copyright'>&#169;
 Luke Dore - 16660991</p>
            </footer>
        </div>
        )
  
  
        
    }
  
  
  
    export default Prediction