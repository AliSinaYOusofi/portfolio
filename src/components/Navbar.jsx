import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {BsFacebook, BsLinkedin, BsTwitter, BsMessenger, BsWhatsapp, BsGithub} from 'react-icons/bs';
import {FaDev} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiMoreVertical} from 'react-icons/fi';
import {GoUnmute, GoMute} from 'react-icons/go';
import {IoCloseOutline} from 'react-icons/io5';
import {motion} from 'framer-motion';
import speaker__sound from '../sounds/speakermp3.mp3';
import speaker__leave from '../sounds/speaker__leave.mp3';
import {useSound} from 'use-sound';
import themeChanger from '../sounds/real theme.mp3';
import MobileNavbar from './MobileNavbar';
import { useGlobalData } from '../globalData/GlobalDataProvider';


const Navbar = () => {

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

    const [{}, dispatch] = useGlobalData();

    const [dark, setDark] = useState(true); // default theme is dark theme
    const [colon, setColon] = useState(false);
    const [speaker, setMuteSpeaker] = useState(false);
    const [menu, closeMenu] = useState(true);
    
    const [playTheme, {stop}] = useSound(themeChanger, {volume: 75})
    const [speakerSound] = useSound(speaker__sound, {volume: 100, playbackRate: 4});
    const [playMutePart, {stopMutepart}] = useSound(speaker__leave, {volume: 10,  playbackRate: 10});

    const hide = () => {  setColon(!colon); }
    
    const colonRef = useRef();
    const menuRef = useRef();

    const makeInvisible = () => {
        colonRef.current.style.visibility="hidden";
        setColon(!colon);
    }
    useEffect( () => {
        colon ? colonRef.current.style.transform="translateY(1rem)" : colonRef.current.style.transform="translateY(-1rem)";
        colon ? colonRef.current.style.visibility="visible" : colonRef.current.style.visibility="hidden";
    }, [colon]);

    useEffect(
        () => { 
            dispatch({type: "set_theme", dark});
        }
    , [dark, dispatch])

    return (
        <>
        <Container className="flex flex-col lg:flex-row justify-around lg:justify-around md:justify-evenly  items-center content-center
         bg-slate-500 w-full h-14  flex-wrap transition ease-in sticky"
         style={{
            background: dark ? "black" : "white",
            color: dark ? "white" : "black"
         }}>
            <div className="logo__part flex-row flex gap-x-1 items-center">
                <FaDev className="cursor-pointer text-4xl"/>
                <span> Boss<span className="hidden lg:inline">Worth</span>Developer </span>
            </div>
            <div className="main__nav__part flex flex-col lg:flex-row justify-around items-center content-center">
                <div className="scrools flex flex-row justify-center content-center items-center ">
                    <ul className="scrolls  flex-col lg:flex-row justify-center content-center gap-x-10 items-center 
                        lg:flex lg:top-0 lg:right-0 lg:my-0 my-1
                        transition ease-in-out delay-75 duration-900 
                        "
                        style={{
                            right: menu ? "0" : "8rem",
                        }}>
                        <li className="cursor-pointer one" onClick={(event) => {event.preventDefault(); zero(4, event)}}> About </li>
                        <li className="cursor-pointer two" onClick={(event) => {event.preventDefault(); zero(1, event)}}> Skills </li>
                        <li className="cursor-pointer three" onClick={(event) => {event.preventDefault(); zero(2, event)}}> Projects </li>
                       
                    </ul>
                </div>
                
                <div className="
                    flex flex-row justify-around
                    gap-x-2 lg:gap-x-4 h-full
                    items-center
                    lg:mx-0 mx-3"
                    
                    >
                    <BsFacebook className="lg:ml-10 ml-0 lg:my-0 my-1 cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>
                    <BsTwitter className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>
                    <BsLinkedin className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>
                    <div onClick={ () => closeMenu(!menu)} className="lg:hidden md:hidden flex">
                        {
                            menu 
                            ? <GiHamburgerMenu className="cursor-pointer text-2xl lg:hidden md:hidden"/>
                            : <IoCloseOutline className="cursor-pointer text-2xl lg:hidden md:hidden" />
                        }
                    </div>
                    <FiMoreVertical className="cursor-pointer text-2xl" onClick={hide}/>
                </div>
               
                <div className=" bg-slate-300 z-1 -top-2 relative lg:top-10 lg:right-3 hidden rounded-xl 
                transition ease-in delay-0 "
                style={{
                    width: "9rem",
                    height: "6rem",
                    display: "flex",
                    flexFlow: "column wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    background: dark ? "rgb(24, 24, 24)" : "rgb(239, 241, 245)",
                    color: dark ? "white" : "black"
                }} ref={colonRef}
                onMouseLeave={makeInvisible}
                
                >
                    <div className="flex flex-row flex-wrap justify-evenly w-full">
                        <BsGithub className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>
                        <BsWhatsapp className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>
                        <BsMessenger className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>
                        <div
                        onClick={ () => setMuteSpeaker(!speaker)}>
                        {
                            speaker 
                            ? <GoUnmute className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125" onClick={speakerSound}/>
                            : <GoMute className="cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125" onClick={playMutePart} onMouseLeave={stopMutepart}/>
                        }
                        </div>
                    </div>


                    <div className="theme rounded-full w-16 py-1 flex ml-2 flex-row content-center items-center my-1" style={{
                                background: !dark ? "black" : "white"
                            }}
                            >
                        <motion.div
                            initial={{x: "0rem"}}
                            animate={{
                                x : dark ? "1.8rem" : "0rem",
                                borderRadius: "50%",
                                marginLeft: "0.4rem"
                            }}
                        onClick={ () => {
                            setDark(!dark);
                        }} style={{
                            
                        }}>
                            <div className="w-6 h-6 rounded-full cursor-pointer" style={{
                                background: dark ? "black" : "white"
                            }} onClick={
                                () => {
                                    speaker ? playTheme() : stop()
                                }
                            }> </div>
                            
                        </motion.div>
                        
                    </div>

                </div>
            </div>
            
        </Container>
       
       <div ref={menuRef} className="relative transition delay-75 duration-1000"

       style={{
        background: dark ? "black" : "white",
        color: !dark ? "black" : "white",
        display: !menu  ? "visible" : "hidden",
       }}>
        {
           ! menu ? <MobileNavbar /> : ""
        }
       </div>
        </>
    );
}

const Container = styled.div`
    font-family: "Fira Code";
    li {
        position: relative;
    }
    .one::after {
        content: "";
        width: 0rem;
        height: 0.1rem;
        background: rgb(37, 65, 96);
        position: absolute;
        top: 1.3rem;
        left: 0rem;
        transition: all 0.4s ease;

    }
    .one:hover::after {
        width: 2.5rem;
    }

    .two::after {
        content: "";
        width: 0rem;
        height: 0.1rem;
        background: rgb(37, 65, 96);
        position: absolute;
        top: 1.3rem;
        left: 0rem;
        transition: all 0.4s ease;

    }
    .two:hover::after {
        width: 3.8rem;
    }

    .three::after {
        content: "";
        width: 0rem;
        height: 0.1rem;
        background: rgb(37, 65, 96);
        position: absolute;
        top: 1.3rem;
        left: 0rem;
        transition: all 0.4s ease;

    }
    .three:hover::after {
        width: 5rem;
    }
`
export default Navbar;