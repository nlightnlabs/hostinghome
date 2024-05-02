
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import * as nlightnApi from "./components/apis/nlightn"
import * as iconsApi from "./components/apis/icons"
import React, {useState, useEffect} from "react"

function App() {

  const apps = [
    {id: 1, name:"business_engagement_system", label: "Business Engagement System", icon:`${iconsApi.generalIcons}/DealFlowIcon.png`, link:"besfreeagent", description: "Manage all of business processes from a single platform with rapid app building, turn-key integrations, workflows, automations and data centricity"},
    {id: 2, name:"ai_deployment_lab", label: "AI Deployment Lab", icon:`${iconsApi.generalIcons}/genAI_icon.png`, link:"ailab", description: "Deploy AI by aggregating and structuring data, buiding and training AI models, and building agents, bots, and agents"},
    {id: 3, name:"secure_file_transfer", label: "Secure File Transfer", icon:`${iconsApi.generalIcons}/secure_file_icon.png`, link:"secure_file_transfer", description: "Manage all of business processes from a single platform with rapid app building, turn-key integrations, workflows, automations and data centricity"},
  ]

  const getIcons = async()=>{
    const response = await nlightnApi.getTable("icons")
    console.log(response.data)
  }

  useEffect(()=>{
    getIcons()
  },[])

  const CardStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    fontSize: "14px",
    boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
    borderRadius: "10px",
    height: "300px",
    width: "300px",
    cursor: "pointer",
    color: "gray",
    margin: "30px",
    fontFamily: "sans-serif",
    transition: "0.3s",
  }

 const IconStyle = {
    height: "75px",
    width: "75px"
 }

 const TitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    margin: "10px",
    height: "50px"
 }

 const description = {
  height: CardStyle.height - IconStyle.height - TitleStyle.height,
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "left",
  margin: "10px"
}

const LogoStyle = {
  height: "200px",
  maxWidth: "400px",
}

const handleSelect = (item)=>{
    window.location.href = `https://nlightnlabs.net/${apps.find(app=>app.id ===item.id).link}`
}

const [hoveredItem, setHoveredItem] = useState("")


  return (
    <div className="d-flex flex-column w-100" style={{height: "100vh", width: "100vw", backgroundImage: "linear-gradient(0deg, rgba(200,225,245), white)"}}>

      <div className="d-flex w-100 justify-content-center mt-5">
        <img style={LogoStyle} src={`${iconsApi.generalIcons}/nlightn_labs_logo.png`}></img>
      </div>

      <div className="d-flex w-100 justify-content-center">
        {apps.map(item=>(
          <div 
            key={item.id} 
            style={{...CardStyle,
              ...{["transform"]: hoveredItem === item.name? "scale(1.1)" : "scale(1)"},
              ...{["backgroundImage"]: hoveredItem === item.name? "linear-gradient(0deg, rgba(200,225,245), rgba(235,245,255))" : "linear-gradient(0deg, white, white"},
            }} 
            onClick={(e)=>handleSelect(item)} 
            onMouseOver={(e)=>setHoveredItem(item.name)}
            onMouseLeave={(e)=>setHoveredItem('none')}
          >
            <img style={IconStyle} src={item.icon}></img>
            <div style={TitleStyle}>{item.label}</div>
            <div style={description}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
