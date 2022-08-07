import React from 'react';
import {DiFsharp} from 'react-icons/di';
import {AiOutlineHome} from 'react-icons/ai';
import {GrArchlinux , GrGoogle} from 'react-icons/gr';
import {FaEthereum, FaGitSquare} from 'react-icons/fa';
import {RiOpenSourceFill} from 'react-icons/ri';


const MobileNavbar = () => {
    return (
        <div classname="lg:hidden md:hidden flex flex-start justify-center w-full h-full items-center  ">
            <ul className="flex flex-col lg:hidden md:hidden justify-center transition ease delay-75 duration-150 content-center  rounded-2xl items-center h-fit gap-y-5">
                <li className="flex cursor-pointer flex-row  items-center text-2xl tracking-wider"><DiFsharp className="flex mr-2 flex-row  items-center cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>  Skills</li> 
                <li className="flex cursor-pointer flex-row  items-center text-2xl tracking-wider"><AiOutlineHome   className="mr-2 flex flex-row  items-center cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>  Home </li> 
                <li className="flex cursor-pointer flex-row  items-center text-2xl tracking-wider"><GrArchlinux   className="flex mr-2 flex-row  items-center cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>  Projects </li>
                <li className="flex cursor-pointer flex-row  items-center text-2xl tracking-wider"><GrGoogle   className="flex flex-row mr-2 items-center cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>  GoEthereum </li>
                <li className="flex cursor-pointer flex-row  items-center text-2xl tracking-wider"><FaGitSquare   className="flex flex-row  mr-2 items-center cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>  OpenSource </li>
                <li className="flex cursor-pointer flex-row  items-center text-2xl tracking-wider"><RiOpenSourceFill   className="flex flex-row mr-2 items-center cursor-pointer text-2xl transition ease-in delay-100 hover:scale-125"/>  FamousGits </li>
            </ul>
        </div>
    );
}

export default MobileNavbar;
