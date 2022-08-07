import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';
import CustomerSlider from './components/CustomerSlider';
import CustomerSliderStatic from './components/CustomerSliderStatic';

import profile1 from "./images/profile1.jpeg";
import profile2 from './images/profile2.jpeg';
import profile3 from './images/profile3.jpeg';

import {ImPinterest2} from 'react-icons/im';
import {FaArrowRight, FaArrowLeft, FaGoogle, FaTwitter} from 'react-icons/fa';
import { useGlobalData } from './globalData/GlobalDataProvider';
import {useState} from 'react';
import WorkingTog from './components/WorkingTog';
import Me from './components/Me';
function App() {

  // responsive navbar using tailwind css\
  const [one, setOne] = useState(1);
  
  let CurrentComponent;

  if (one === 1) {
    CurrentComponent = <CustomerSlider  imageUrl={profile1} name="Shakir Shakira" icon={<ImPinterest2 />} 
    iconName="Pintrest" description="“Weve never had come this far without Johns great attention to detail and care for the final product”"
    title={"CEO"}/>
    
  }

  else if (one === 2) {
    CurrentComponent = <CustomerSlider  imageUrl={profile2} name="Brad Hero" icon={<FaTwitter />} 
    iconName="Twitter" description="“Weve never had come this far without Johns great attention to detail and care for the final product”"
    title={"CEO"}/>
   
  }

  else {
    CurrentComponent = <CustomerSlider  imageUrl={profile3} name="Jose Annie" icon={<FaGoogle />} 
    iconName="Google" description="“Weve never had come this far without Johns great attention to detail and care for the final product”"
    title={"CEO"}/>
    
  }


  const [{theme}] = useGlobalData();

  const toBack = () => {
    setOne( one => one - 1);
    if (one < 1)
      setOne(1);
  }
  const toNext = () => {
    setOne(one => one + 1);
    if (one >= 3)
      setOne(1);
  }
  return (  
    <Container className="">
      <Navbar />
      <HeroComponent/>
      <CustomerSliderStatic />
      <div className="w-full h-full lg:h-2/3">
       <div> {CurrentComponent} </div>
        <div className="buttons w-full flex flex-row justify-center gap-x-4"
       style={{
        background: theme ? "black" : "white",
        color: theme ? "white" : "black"
    }}>
        <FaArrowLeft className="text-3xl hover:scale-105 transition-all duration-2000 cursor-pointer"
        onClick={toBack}/>
        <FaArrowRight className="text-3xl  hover:scale-105 transition-all duration-2000 cursor-pointer"
        onClick={toNext}/>
      </div>
      </div>
      <WorkingTog />
      <Me />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  `
export default App;
