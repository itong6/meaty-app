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

                <HeadCont>
                    <H1>{animalresults[item].header}</H1>
                        <Latin>{animalresults[item].latin}</Latin>
                </HeadCont>

                <ResultImg src={animalresults[item].img} />

                <P>
                    {animalresults[item].desc}
                </P>
                <SelectCont>
                    <Select onClick={
                            ()=>r.push({
                                pathname:"/meat/",
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
`;

const ResultImg = styled.img`
width:40vw;
height:40vh;
`;

//text not with in cont??
const HeadCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:70vw;
height:20vh;
`;

const H1 = styled.text`
text-align:center;
font-size: 30px;
font-family:Ubuntu;
font-weight:500;
margin-bottom:1rem;
`;

const Latin = styled.text`
font-family:Ubuntu;
font-size:24px;
font-style:italic;
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

const P = styled.text`
font-family:Ubuntu;
font-seize:20px;
font-weight:500;
margin-bottom:0.5rem;
margin-top:1rem;
`;