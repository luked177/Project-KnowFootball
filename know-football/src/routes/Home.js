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
import clubData from '../clubData';

function Home() {
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
           <Form formData={clubData[0].arsenalData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Aston Villa" icon={astonvilla} >
           <Form formData={clubData[0].astonvillaData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Brentford" icon={brentford} >
           <Form formData={clubData[0].brentfordData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Brighton" icon={brighton} >
           <Form formData={clubData[0].brightonData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Burnley" icon={burnley} >
           <Form formData={clubData[0].burnleyData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Chelsea" icon={chelsea} >
           <Form formData={clubData[0].chelseaData } readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Crystal Palace" icon={crystalpalace} >
           <Form formData={clubData[0].crystalpalaceData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Everton" icon={everton} >
           <Form formData={clubData[0].evertonData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Leeds" icon={leeds} >
           <Form formData={clubData[0].leedsData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Leicester" icon={leicester} >
           <Form formData={clubData[0].leicesterData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Liverpool" icon={liverpool} >
           <Form formData={clubData[0].liverpoolData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Manchester City" icon={mancity} >
           <Form formData={clubData[0].mancityData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Manchester United" icon={manunited} >
           <Form formData={clubData[0].manutdData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Newcastle" icon={newcastle} >
           <Form formData={clubData[0].newcastleData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Norwich" icon={norwich} >
           <Form formData={clubData[0].norwichData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Southampton" icon={southampton} >
           <Form formData={clubData[0].southamptonData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Tottenham" icon={spurs} >
           <Form formData={clubData[0].tottenhamData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Watford" icon={watford} >
           <Form formData={clubData[0].watfordData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="West Ham" icon={westham} >
           <Form formData={clubData[0].westhamData} readOnly={true}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="founded" />
                    <SimpleItem dataField="stadiumName" />
                    <SimpleItem dataField="stadiumBuilt" />
                    <SimpleItem dataField="lastFinish" />
                </Form>
            </Item>
            <Item title="Wolves" icon={wolves} >
           <Form formData={clubData[0].wolvesData} readOnly={true}>
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