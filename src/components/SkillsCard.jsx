import React from 'react';
import { useGlobalData } from '../globalData/GlobalDataProvider';
import "./Skills.css";

const SkillsCard = ({icon, skillName, skillDetails}) => {
    const [{theme}] = useGlobalData();

    return (
        <div className="flex flex-col justify-center items-center 
            content-center bg-slate-400
            px-2 py-4  w-80 rounded-sm gap-y-2 lg:w-1/3 skills"
            style={{
                background: theme ? "rgb(24, 24, 24)" : "rgb(239, 241, 245)",
                color: theme ? "white" : "black"
            }}>
            <div className="flex flex-row ">
                <span className="text-3xl mr-2"> {icon} </span> <span className="text-2xl"> {skillName}</span>
            </div>
            <div className="skills__details text-center">
                <h6> {skillDetails}</h6>
            </div>
        </div>
    );
}

export default SkillsCard;
