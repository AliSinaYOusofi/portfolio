import styled from 'styled-components';
import {  FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useGlobalData } from '../globalData/GlobalDataProvider';
import {RiNumber0, RiNumber1, RiNumber2, RiNumber3, RiNumber4} from 'react-icons/ri';

const Me = () => {
   
    const [{theme}] = useGlobalData();
   
    function zero(event, prevent) {
       
        prevent.preventDefault();
        prevent.stopPropagation();
        console.log(window.innerHeight);
        if (window.innerHeight >= 377) {
           
            if (event === 0) {
                window.scrollTo({top: 0, behavior: "smooth",})
             
            }
            else if (event === 1) {
                window.scrollTo({top: 460, behavior: "smooth"})
               
            }
            else if (event === 2) {
                window.scrollTo({behavior: "smooth", top:980})
               
            }
            else if (event === 3){
                    window.scrollTo({top: 1600, behavior: "smooth"});
            }
    
            else if (event === 4){
                window.scrollTo({top: 2200, behavior: "smooth"});
            }
    
        }
        
    }
    return (
        <Container className=' w-full h-full lg:h-fit flex flex-col
        lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:justify-center'
        style={{
            background: theme ? "black" : "white",
            color: theme ? "white" : "black"
        }}>
            
            <div className="me_container
            flex flex-col   justify-center content-center
            ml-10 lg:ml-12 gap-y-3 
           ">
                <div className="w-full flex flex-row items-center gap-x-3 mt-20 lg:mt-32">
                    <div>
                        <img src="https://www.svgrepo.com/show/70234/man.svg" alt="fa" 
                        className="rounded-xl w-16 h-full lg:w-32"/>
                    </div>
                    <div className="felx flex-row items-center text-xl">
                        <h1 className="lg:text-5xl"> Ali Sina</h1>
                        <h2 className="lg:text-2xl">Frontend Developer</h2>
                    </div>
                </div>
                <div className="flex flex-row gap-x-4 text-2xl ml-3 lg:text-4xl
                lg:gap-x-5
               ">
                    <FaFacebook className="transition duration-300 delay-0 
                    hover:-translate-y-1 cursor-pointer hover:"/>
                    <FaInstagram className="transition duration-300 delay-0 
                    hover:-translate-y-1 cursor-pointer hover:"/>
                    <FaTwitter className="transition duration-300 delay-0 
                    hover:-translate-y-1 cursor-pointer hover:"/>
                    <FaDiscord className="transition duration-300 delay-0 
                    hover:-translate-y-1 cursor-pointer hover:"/>
                    <FaGithub className="transition duration-300 delay-0 
                    hover:-translate-y-1 cursor-pointer hover:"/>
                    <FaLinkedin className="transition duration-300 delay-0 
                    hover:-translate-y-1 cursor-pointer hover:"/>
                </div>
            </div>
            <div className='flex flex-col gap-y-5 justify-center
            content-center ml-11 lg:ml-0 mt-10  lg:mt-32'>
                <div className="str">
                    <h1 className="text-2xl lg:text-5xl fine"> Get in Touch </h1>
                </div>
                <div className="email">
                    <h3 className="text-xl lg:text-3xl"> Email Me:</h3>
                    <h1 className="text-xl  font-semibold  w-fit h-fit"> senayousofiali@gmail.com</h1>
                    
                </div>
                <div className="call">
                    <h3 className="text-xl lg:text-3xl"> Call Me </h3>
                    <h1 className="text-xl font-semibold w-fit h-fit"> [+93] 731055068 </h1>
                   
                </div>
            </div>
            <div className="flex flex-row items-center w-full h-fit content-center justify-center
            lg:relative lg:top-10 lg:left-1/2
            gap-x-2">
                <div className="flex flex-row gap-x-8 mt-10 lg:px-10 lg:py-4 p-3 rounded-xl"
                style={{
                    background: theme ? "rgb(24, 24, 24)" : "rgb(239, 241, 245)",
                    color: theme ? "white" : "black"
                }}>
                    <div className='transition duration-200 rounded-full hover:bg-white
                    px-2 py-2 hover:text-black cursor-pointer'> <RiNumber0 onClick={(event) => {event.preventDefault(); zero(0, event)}}/></div>
                    <div className='transition duration-200 rounded-full hover:bg-white
                    px-2 py-2 hover:text-black cursor-pointer'> <RiNumber1 onClick={(event) => {event.preventDefault(); zero(1, event)}}/></div>
                    <div className='transition duration-200 rounded-full hover:bg-white
                    px-2 py-2 hover:text-black cursor-pointer'> <RiNumber2  onClick={(event) => {event.preventDefault(); zero(2, event)}}/></div>
                    <div className='transition duration-200 rounded-full hover:bg-white
                    px-2 py-2 hover:text-black cursor-pointer'> <RiNumber3  onClick={(event) => {event.preventDefault(); zero(3, event)}}/></div>
                      <div className='transition duration-200 rounded-full hover:bg-white
                    px-2 py-2 hover:text-black cursor-pointer'> <RiNumber4 onClick={(event) => {event.preventDefault(); zero(4, event)}}/></div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .str {
       h1{
        font-stretch: expanded;
       }
    }
    .call, .email {
        h1 {
        position: relative;
        cursor: pointer;
        
       }
    }

    .email {
        h1::after {
        content: "";
        position: absolute;
        top:1.7rem;
        right:0rem;
        width: 0rem;
        height: 0.4rem;
        background: wheat;
        transition: all 0.3s ease;
      }
      h1:hover::after {
        width: 18.4rem;
        cursor: pointer;
      }
    }
    .call{
       
       h1::after {
        content: "";
        position: absolute;
        top:1.7rem;
        right:0rem;
        width: 0rem;
        height: 0.4rem;
        background: wheat;
        transition: all 0.3s ease;
      }
      h1:hover::after {
        width: 11.4rem;
        cursor: pointer;
      }
    
    }
  
`
export default Me;
