import React from 'react';
import { useGlobalData } from '../globalData/GlobalDataProvider';
import SkillsCard from './SkillsCard';
import { FaReact, FaPython, FaJs} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import "./Hero.css";


const HeroComponent = () => {
    const [{theme}] = useGlobalData();

    return (
        <>
            <div className="w-full h-full bg-slate-400 -my-2
            flex flex-col justify-center items-center content-center
            gap-y-10 transition ease-in text-center"
            
            style={{
                background: theme ? "black" : "white",
                color: theme ? "white" : "black"
            }}>
            
            <div>
                <h1 className="text-5xl "> Most Welcome!</h1>
            </div>
            <div className="gayp-y-2 leading-4">
                    <h1 className="text-4xl"> I'm Ali Yousofi.</h1>
                    <h5 className="text-xl"> A&nbsp;
                    <span className="web__dev" style={{"--i": 1}}>W</span>
                    <span className="web__dev" style={{"--i": 2}}>E</span>
                    <span className="web__dev" style={{"--i": 3}}>B</span>
                    <span className="web__dev" style={{"--i": 4}}></span>
                    <span className="web__dev" style={{"--i": 5}}>D</span>
                    <span className="web__dev" style={{"--i": 6}}>E</span>
                    <span className="web__dev" style={{"--i": 7}}>V</span>
                    <span className="web__dev" style={{"--i": 8}}>E</span>
                    <span className="web__dev" style={{"--i": 9}}>L</span>
                    <span className="web__dev" style={{"--i": 10}}>O</span>
                    <span className="web__dev" style={{"--i": 11}}>P</span>
                    <span className="web__dev" style={{"--i": 12}}>E</span>
                    <span className="web__dev" style={{"--i": 13}}>R&nbsp;</span>
                    Based In Canada.</h5>
            </div>
            <div>
                    <button

                    className="button rounded-sm cursor-pointer px-10 py-2 transition delay-75
                    "
                    style={{
                        background: !theme ? "black" : "white",
                        color: !theme ? "white" : "black",
                    }}
                    >
                    Portfolio
                    </button>
            </div>
                
            </div>
            
            <div
            style={{
                color: theme ? "white" : "black"
            }}>
                <h1 className='text-center text-5xl -mt-20 mb-6'>S k i l l s</h1>
            </div>
            
            <div className="w-full lg:h-fit  flex-wrap flex flex-col lg:flex-row lg:content-start justify-center lg:gap-x-32 content-center gap-y-5 items-center"
             style={{
                background: theme ? "black" : "white",
                color: theme ? "white" : "black"
            }}>
                <SkillsCard icon={<FaReact />} skillName="React" skillDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi"} />
                <SkillsCard icon={<FaPython />} skillName="Python" skillDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi"} />
                <SkillsCard icon={<FaJs />} skillName="Javascript" skillDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi"} />
                <SkillsCard icon={<SiTailwindcss />} skillName="TailWind" skillDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi"} />
            </div>
        </>
    );
}

export default HeroComponent;
