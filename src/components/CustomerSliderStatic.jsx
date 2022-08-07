import React from 'react';
import styled from 'styled-components';
import { useGlobalData } from '../globalData/GlobalDataProvider';

const CustomerSliderStatic = () => {
    const [{theme}] = useGlobalData();
    return (
        <Container
        className="flex flex-col  w-full h-1/2 
        justify-center items-start gap-y-10
        
        lg:justify-around lg:items-center lg:flex-row lg:gap-x-48"
        
        style={{
            background: theme ? "black" : "white",
            color: theme ? "white" : "black"
        }}>
            <div className="ml-10 lg:ml-0">
                <h3 className="uppercase lg:text-3xl"> <span>/</span>Testomonials</h3>
                <h1 className="lg:text-4xl">What Clients Say About my work</h1>
            </div>
            <div className="ml-10 lg:ml-0">
                <span className=' in relative cursor-pointer'>Get in touch<span className="ml-1 lg:ml-0">-&gt;</span></span>
            </div>
            
        </Container>
    );
}
const Container = styled.div`
        font-family: "Fira Code";
        .in::after {
            content: "";
            position: absolute;
            top: 1.3rem;
            left: 0rem;
            width: 1rem;
            height: 0.2rem;
            background-color: #3d3c3c;
            transition: all 0.3s ease;
        }
        .in:hover::after {
            width: 9rem;
        }
        .in > span {
            transition: all 0.3s ease;
        }
        .in:hover > span {
            margin-left: .6rem;
        }
        
`
export default CustomerSliderStatic;
