import '../App.css';
import SideNav from "../SideNav";
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
import 'devextreme/dist/css/dx.light.css';

function Home() {
  const arsenalData = {
    name: 'Arsenal',
    founded: '1886',
    stadiumBuilt: "2006",
    stadiumName: "Emirates",
    lastFinish: "5th"
};  

const astonvillaData = {
  name: 'Aston Villa',
  founded: '1874',
  stadiumBuilt: "1897",
  stadiumName: "Villa Park",
  lastFinish: "14th"
};

const brentfordData = {
  name: 'Brentford',
  founded: '1889',
  stadiumBuilt: "2020",
  stadiumName: "Brentford Community Stadium",
  lastFinish: "13th"
};

const brightonData = {
  name: 'Brighton',
  founded: '1901',
  stadiumBuilt: "2011",
  stadiumName: "AMEX Stadium",
  lastFinish: "9th"
};

const burnleyData = {
  name: 'Burnley',
  founded: '1882',
  stadiumBuilt: "1883",
  stadiumName: "Turf Moor",
  lastFinish: "18th"
};

const chelseaData = {
  name: 'Chelsea',
  founded: '1905',
  stadiumBuilt: "1877",
  stadiumName: "Stamford Bridge",
  lastFinish: "3rd"
};

const crystalpalaceData = {
  name: 'Crystal Palace',
  founded: '1905',
  stadiumBuilt: "1924",
  stadiumName: "Selhurst Park",
  lastFinish: "12th"
};

const evertonData = {
  name: 'Everton',
  founded: '1878',
  stadiumBuilt: "1892",
  stadiumName: "Goodison Park",
  lastFinish: "16th"
};

const leedsData = {
  name: 'Leeds',
  founded: '1919',
  stadiumBuilt: "1897",
  stadiumName: "Elland Road",
  lastFinish: "17th"
};

const leicesterData = {
  name: 'Leicester City',
  founded: '1884',
  stadiumBuilt: "2002",
  stadiumName: "King Power",
  lastFinish: "8th"
};

const liverpoolData = {
  name: 'Liverpool',
  founded: '1892',
  stadiumBuilt: "1884",
  stadiumName: "Anfield",
  lastFinish: "2nd"
};

const mancityData = {
  name: 'Manchester City',
  founded: '1894',
  stadiumBuilt: "2002",
  stadiumName: "Etihad",
  lastFinish: "1st"
};

const manutdData = {
  name: 'Manchester United',
  founded: '1878',
  stadiumBuilt: "1910",
  stadiumName: "Old Trafford",
  lastFinish: "6th"
};

const newcastleData = {
  name: 'Newcastle',
  founded: '1892',
  stadiumBuilt: "1880",
  stadiumName: "St James Park",
  lastFinish: "11th"
};

const norwichData = {
  name: 'Norwich City',
  founded: '1902',
  stadiumBuilt: "1935",
  stadiumName: "Carrow Road",
  lastFinish: "20th"
};

const southamptonData = {
  name: 'Southampton',
  founded: '1885',
  stadiumBuilt: "2001",
  stadiumName: "St Marys",
  lastFinish: "15th"
};

const TottenhamData = {
  name: 'Tottenham',
  founded: '1882',
  stadiumBuilt: "2019",
  stadiumName: "Tottenham Hotspur Stadium",
  lastFinish: "4th"
};

const watfordData = {
  name: 'Watford',
  founded: '1898',
  stadiumBuilt: "2015",
  stadiumName: "Vicarage Road",
  lastFinish: "19th"
};

const westhamData = {
  name: 'West Ham',
  founded: '1895',
  stadiumBuilt: "2016",
  stadiumName: "London Stadium",
  lastFinish: "7th"
};

const wolvesData = {
  name: 'Wolverhampton Wanderers',
  founded: '1877',
  stadiumBuilt: "1889",
  stadiumName: "Molineux",
  lastFinish: "10th"
};
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
            loop={true}
            showNavButtons={true}>
           <Item title="Arsenal" icon={arsenal} >
           <Form formData={arsenalData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Aston Villa" icon={astonvilla} >
           <Form formData={astonvillaData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Brentford" icon={brentford} >
           <Form formData={brentfordData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Brighton" icon={brighton} >
           <Form formData={brightonData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Burnley" icon={burnley} >
           <Form formData={burnleyData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Chelsea" icon={chelsea} >
           <Form formData={chelseaData } readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Crystal Palace" icon={crystalpalace} >
           <Form formData={crystalpalaceData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Everton" icon={everton} >
           <Form formData={evertonData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Leeds" icon={leeds} >
           <Form formData={leedsData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Leicester" icon={leicester} >
           <Form formData={leicesterData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Liverpool" icon={liverpool} >
           <Form formData={liverpoolData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Manchester City" icon={mancity} >
           <Form formData={mancityData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Manchester United" icon={manunited} >
           <Form formData={manutdData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Newcastle" icon={newcastle} >
           <Form formData={newcastleData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Norwich" icon={norwich} >
           <Form formData={norwichData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Southampton" icon={southampton} >
           <Form formData={southamptonData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Tottenham" icon={spurs} >
           <Form formData={TottenhamData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Watford" icon={watford} >
           <Form formData={watfordData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="West Ham" icon={westham} >
           <Form formData={westhamData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Wolves" icon={wolves} >
           <Form formData={wolvesData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            </TabPanel>
            </div>
            <div className='soon'>
              <h1>More Leagues Coming Soon!</h1>
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
  
  
  
    export default Home