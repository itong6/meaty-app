import { useRouter } from "next/router";
import { animalresults } from "../../data/res_content";

import styled from 'styled-components';
export default function Results(){


    const r = useRouter();
    const {page, type, item} = r.query;

    if(item === undefined){return null}
    return<div>
        <Overlay onClick={
            ()=>r.push({pathname:'/meat', query:{
                type:type,
                page:page
            }})
        }></Overlay>
        <img src={animalresults[item].img} />

        <h1>
            {animalresults[item].header}
        </h1>

        <h3>
            {animalresults[item].desc}
        </h3>

        <button onClick={
                ()=>r.replace({
                    pathname:"/meat",
                    query:{
                     type:animalresults[item].select
                    }
                })
            }> Select</button>


    </div>
}

const Overlay = styled.div`
position:fixed;
background: rgba(0,0,0,0.25);
height:100vh;
width:100vw;
left:0;
top:0;
`;