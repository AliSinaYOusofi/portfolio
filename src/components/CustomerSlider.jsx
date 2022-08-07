import React from 'react';
import styled from 'styled-components';
import { useGlobalData } from '../globalData/GlobalDataProvider';


const CustomerSlider = ({imageUrl, icon, iconName, description, name}) => {
    const [{theme}] = useGlobalData();
    return (
        <Container 
        className="flex flex-col w-full h-full items-center 
        gap-y-10"
        
        style={{
            background: theme ? "black" : "white",
            color: theme ? "white" : "black"
        }}>
           <div className="one__card
           flex flex-col justify-center items-start gap-y-5
           transition delay-75 dur
           lg:flex-row lg:items-center lg:justify-around lg:content-center">
            
            <div className="image w-full h-full  flex flex-col justify-center
            items-center content-center">
                <img src={imageUrl} alt="" 
                className=" border-xl rounded-xl"/>
            </div>
            
            <div className="lg:flex lg:flex-col lg:gap-y-10">
                <div className="icon flex flex-row justify-start gap-x-1 
                ml-11 lg:ml-0 ">
                    {icon} <span className="text-2xl text-gray-600">{iconName}</span>
                </div>
                <div className="details  ml-11 lg:ml-0 w-fit lg:text-3xl">
                    {description}
                </div>
            </div>
            
           </div>
        </Container>
    );
}

const Container = styled.div`
    .image {
        img {
            width: 20rem;
            height: 22rem;
        }
    }
    .icon {
        svg {
            font-size: 2rem;
        }
    }

   
`
export default CustomerSlider;