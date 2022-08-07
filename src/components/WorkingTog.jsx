import React from 'react';
import styled from 'styled-components';
import { useGlobalData } from '../globalData/GlobalDataProvider';

const WorkingTog = () => {
    const [{theme}] = useGlobalData();
    return (
        <Container
        className="flex flex-col w-full h-full items-center
        -mt-1 lg:grid lg:grid-rows2 lg:grid-cols-2 lg:-gap-x-10"
        style={{
            background: theme ? "black" : "white",
            color: theme ? "white" : "black"
        }}>
            <div className="text lg:flex lg:flex-col lg:gap-y-10 lg:ml-10">

                <div className="mt-10 lg:mt-0">
                    <div className="w-2/3 lg:mb-5 h-1 relative bg-white    lg:relative lg:left-10 hidden lg:flex"
                    style={{
                        background: !theme ? "black" : "white",
                        color: theme ? "white" : "black"
                    }}></div>
                    <h1 className="lg:text-4xl  text-xl"> Intrested In  Working Together?</h1>
                </div>
               
                <div>
                    <h1  className="lg:text-4xl text-2xl font-semibold"> Let's Talk -&gt; </h1> 
                    <div className="w-2/3 lg:mt-5 h-1 relative bg-white hidden lg:flex
                    lg:relative lg:left-10"
                    style={{
                        background: !theme ? "black" : "white",
                        color: theme ? "white" : "black"
                    }}></div>
                </div>
            </div>
            <div className="form flex flex-col gap-y-6 lg:mt-10 lg:mr-10">
                <div >
                    <input className="mt-5 lg:mt-0 border-none outline-none 
                    py-2 px-3 text-center rounded-sm" type='text' placeholder='your name' 
                    style={{
                        background: theme ? "rgb(24, 24, 24)" : "rgb(239, 241, 245)",
                        color: theme ? "white" : "black"
                    }}/>
                </div>
                <div className="">
                    <input className="border-none outline-none  
                    py-2 px-3 text-center rounded-sm" type='text' placeholder='your email' 
                    style={{
                        background: theme ? "rgb(24, 24, 24)" : "rgb(239, 241, 245)",
                        color: theme ? "white" : "black"
                    }}/>
                </div>
                <div>
                   <textarea className="border-none outline-none 
                    py-2 px-3 text-center rounded-sm w-full" placeholder='Describe Your Project' cols="10" rows="10" 
                    style={{
                        background: theme ? "rgb(24, 24, 24)" : "rgb(239, 241, 245)",
                        color: theme ? "white" : "black"
                    }}/>
                </div>
                <div className="hell">
                    <span className="one px-4 py-1 text-xl bg-slate-500 rounded-sm">Send</span>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .one {
        position: relative;
        cursor: pointer;
        
        transition: all 0.4s ease;
        z-index: 1;
       
    }

    .hell {
        span::after {
            content: "";
            width: 5.1rem;
            height: 0%;
            background: rgb(49, 50, 54);
            position: absolute;
            border-radius: 2px;
            top: 0rem;
            left: 0rem;
            z-index: -1;
            transition: all 0.4s ease;
        }

        span:hover::after {
                height: 100%;
    }
        }
    
`
export default WorkingTog;
