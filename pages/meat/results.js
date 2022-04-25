import { useRouter } from "next/router";
import { animalresults } from "../../data/res_content";
import styled from 'styled-components';
import { button } from "../../data/content";

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
        <ResultContCont >
            <ResultCont>
            <XCont>
                    <X onClick={
                        ()=>r.push({pathname:'/meat', query:{
                            type:type,
                            page:page
                        }})
                    }><img src="/x.svg"/></X>
                </XCont>

                <H1Cont>
                    <H1>
                        {animalresults[item].header}
                        <h4>{animalresults[item].latin}</h4>
                    </H1>
                </H1Cont>

                <ResultImg src={animalresults[item].img} />

                <p>
                    {animalresults[item].desc}
                </p>
                <SelectCont>
                    <Select onClick={
                            ()=>r.replace({
                                pathname:"/meat",
                                query:{
                                type:animalresults[item].select
                                }
                            })
                        }>{button[2]}</Select>
                </SelectCont>
            </ResultCont>
        </ResultContCont>

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

const ResultContCont = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
border:blue 2px solid;
top:0;
left:0;
height:100vh;
width:100vw;
`;

//overlay card
const ResultCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
top:60px;
left:15vw;
width:396px;
height:600px;
padding:1rem;
border-radius:8px;
background:#FFF;
border: lightgrey 2px solid;
`;

const ResultImg = styled.img`
width:30vw;
height:30vh;
`;

//text not with in cont??
const H1Cont = styled.div`
border: 2px red solid
`;

const H1 = styled.text`
font-size: 24px;
font-family:Ubuntu;
padding:0;
`;

const XCont = styled.div`
position:relative;
display:flex;
justify-content:end;
align-items:center;
width:inherit;
padding-right 1em;
`;

const X = styled.text`
color: white;
height:44px;
width:44px;
padding-right:1em;
border-radius:30px;
background:crimson;
`;

const Select = styled.button`
width:75px;
height:40px;
color:white;
background:#871010;
border-radius:4px;
border:none;
font-family:inherit;
font-size: 15px;
font-weight: 500;
`;

const SelectCont = styled.div`.
position:relative;
display:flex;
justify-content:end;
width:inherit;
padding-right: 1em;
`;