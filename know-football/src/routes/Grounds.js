import '../App.css';
import SideNav from "../SideNav";
import { Popup } from 'devextreme-react/popup';
import { Button } from 'devextreme-react/button';
import SelectBox from 'devextreme-react/select-box';
import 'devextreme/dist/css/dx.common.css';
import {useState, useEffect} from 'react'
import TabPanel, {Item} from 'devextreme-react/tab-panel';





function Grounds() {

    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }

        if (lat === 53.46317385152592 & lng === -2.2912864579861787){
            chosenGround = "Old Trafford, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 53.43093799203203 & lng === -2.960808557029017){
            chosenGround = "Anfield, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.49091870338625 & lng === -0.28866965992544735){
            chosenGround = "Brentford Community Stadium, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 552.62225768994829 & lng === 1.309274011288199){
            chosenGround = "Carrow Road, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 53.77792395760565 & lng === -1.572123144480081){
            chosenGround = "Elland Road, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.55503523724262 & lng === -0.10842727341460819){
            chosenGround = "Emirates, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 53.483265765697006 & lng === -2.2004382175094346){
            chosenGround = "Etihad, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 53.43890840819129 & lng === -2.9662871156593127){
            chosenGround = "Goodison Park, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 52.620515987910316 & lng === -1.142210959875847){
            chosenGround = "King Power Stadium, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.53884961627308 & lng === -0.016571515743274406){
            chosenGround = "London Stadium, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 52.59036001952828 & lng === -2.1304609887131827){
            chosenGround = "Molineux, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.39827477358456 & lng === -0.08576468876547515){
            chosenGround = "Selhurst Park, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 54.97566065867646 & lng === -1.6216670020976953){
            chosenGround = "St James Park, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 50.90594096296266 & lng === -1.3909622311147503){
            chosenGround = "St Mary's Stadium, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.48178324727183 & lng === -0.19095650225381172){
            chosenGround = "Stamford Bridge, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 50.86170729134077 & lng === -0.08370557344463984){
            chosenGround = "The Amex, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.60435878733629 & lng === -0.06620447341244586){
            chosenGround = "Tottenham Hotspur Stadium, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 53.788810644306984 & lng === -2.2303478021516097){
            chosenGround = "Turf Moor, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 51.64995982446169 & lng === -0.4014844886038287){
            chosenGround = "Vicarage Road, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else if (lat === 52.509261868356894 & lng === -1.8847828022087316){
            chosenGround = "Villa Park, "
            addGroundGPS()
            alert(chosenGround + " Added")
        }

        else {
            alert("Not within range of stadium")
        }
        
      }

    const allGrounds = ["Anfield, ", "Brentford Community Stadium, ", "Carrow Road, ",
    "Elland Road, ", "Emirates, ", "Etihad, ", "Goodison Park, ", "King Power Stadium, ",
    "London Stadium, ", "Molineux, ", "Old Trafford, ", "Selhurst Park, ", "St James Park, ", "St Mary's Stadium, ",
    "Stamford Bridge, ", "The Amex, ", "Tottenham Hotspur Stadium, ", "Turf Moor, ", "Vicarage Road, ", "Villa Park, "

]
    const [groundsVisited, setGroundsVisited] = useState([]);
    let [chosenGround, setChosenGround] = useState();
    
    function groundChosen(e){
        chosenGround = e.value
    }

    useEffect(() => {
        const groundsVisited = JSON.parse(localStorage.getItem('Grounds'));
        if (groundsVisited) {
         setGroundsVisited(groundsVisited);
        }
      }, []);

    function addGround(){
        if (groundsVisited.includes(chosenGround) === true){
            alert("Already Visited")
        }
        else{
            groundsVisited.push(chosenGround)
            togglePopup()
            localStorage.setItem('Grounds', JSON.stringify(groundsVisited));
            alert(chosenGround + "Added")
            refresh()
        }

    } 
    
    function addGroundGPS(){
        if (groundsVisited.includes(chosenGround) === true){
            alert("Already Visited")
        }
        else{
            groundsVisited.push(chosenGround)
            localStorage.setItem('Grounds', JSON.stringify(groundsVisited));
            refresh()
        }

    }    

    const renderContent = () =>  {
        return (
            <>  
                <div className="label">Choose Stadium
                <SelectBox
                items={allGrounds}
                onValueChanged={groundChosen}
                />
                </div>
                <Button
                className="cancelButton"
                text="Cancel"
                onClick={togglePopup}/>
                <Button
                className="submitButton"
                text="Submit"
                onClick={addGround}/>
            </>            
        )
    };

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const togglePopup = () => {
        setPopupVisibility(!isPopupVisible);
    };

    function refresh() {
        window.location.reload(false);
      }

    return (
        <div className='main'>

        <SideNav/>
        <header>
        <h1>Know Football</h1>
        </header>
        <div className='tabPanel'>
        <TabPanel
        animationEnabled={false}
        swipeEnabled={true}
        deferRendering={false}
        loop={true}>
        <Item title="Premier League">
        <p className='groundsVisited'>Grounds Visited:{groundsVisited}</p>  
        </Item>
        <Item title="More Coming Soon">
        <p className='groundsVisited'>More Leagues Coming Soon !</p>  
        </Item>
        </TabPanel>
        </div>
        <Button
          className="addGroundButton"
          text="Add Ground"
          onClick={togglePopup}
        />

        <Button
          className="groundGPS"
          text="GPS"
          onClick={getLocation}
        />
        <Popup
                contentRender={renderContent}
                visible={isPopupVisible}
                closeOnOutsideClick={true}
                onHiding={togglePopup}
                showTitle={true}
                title="Add a ground"
                width={500}
                height={500} 
                resizeEnabled={true}
                className="popup"
            />
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
  
  
  
    export default Grounds