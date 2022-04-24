import {useRouter} from 'next/router';
import {settings,cat0Imgs, cat1Imgs, cat2Imgs, chicken1Imgs,cow1Imgs, pig1Imgs } from '../../data/selection_content';
import Display from '../../Display';
import Results from './results';
import { heading, subheading, button, chicken_indicator } from '../../data/content';
import styled from 'styled-components'


export default function Meat(){
    const r = useRouter();
    const {page, type} = r.query;

    const BodyCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `;
    const HeadCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    margin-top:1rem;
    `;
    const P = styled.text`
    margin-top:0.5rem;
    `;
    const H1 = styled.text`
    margin-bottom:0;
    `;

    const SettingCont = styled.div`
    display:flex;
    justify-content:end;
    width:95vw;
    margin-top:0.5rem;
    margin-right:1rem;
    `;

    const ContinueCont = styled.div`
    display:flex;
    justify-content:end;
    width:100vw;
    `;

    const Continue = styled.button`
    width:117px;
    height:40px;
    margin-right:1rem;
    border:none;
    border-radius:4px;
    background:#871010;
    color:#FFF;
    `;

    const IndicatorCont = styled.div`
    display:flex;
    justify-content:center;
    width:100vw;
    `;

    const BathCont = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 3rem;
    width:100vw;
    height:70vh;
    border: pink solid 2px;
    `;

    const BathChicken = styled.img`
    position:absolute;
    top:230px;
    border:red 2px solid;
    height:30vh;
    width:100vw;
    `;

    const Bath = styled.img`
    top:0;
    width:100vw;
    height:70vh;
    border: green 2px solid;
    `;

    const BathChicken2 = styled.img`
    position:absolute;
    top:230px;
    border:red 2px solid;
    height:50vh;
    width:100vw;
    z-index:-1;
    `;

    const Bath2 = styled.img`
    top:0;
    width:100vw;
    height:70vh;
    opacity:95%;
    border: green 2px solid;
    `;


    if(page === '2'){
        return <div>
            <h1>{heading[1]}</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"meat",
                    query:{
                     page:Number(page)+1
                    }
                })
            }>{button[1]}</button>
        </div>
    }

    if(page === '3'){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
        <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[0]}</P>
        </HeadCont>
        <BodyCont>
            <Display  arr={cat0Imgs} />
            <Results />
        </BodyCont>
    </div>
    }

    if(type === "Select Chicken"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[1]}</P>
        </HeadCont>
        <BodyCont>
            <Display  arr={chicken1Imgs} />
            <Results />
        </BodyCont>

        </div>
        
    }

    if(type === "Select Cow"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[1]}</P>
        </HeadCont>
        <BodyCont>
            <Display  arr={cow1Imgs} />
            <Results />
        </BodyCont>

        </div>
        
    }

    if(type === "Select Pig"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[1]}</P>
        </HeadCont>
        <BodyCont>
            <Display  arr={pig1Imgs} />
            <Results />
        </BodyCont>

        </div>
        
    }

    if(type === "Stun Method"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[4]}</P>
        </HeadCont>
        <BodyCont>
            <Display  arr={cat1Imgs} />
            <Results />
        </BodyCont>

        </div>
        
    }

    if(type === "Chicken Stun Method"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[4]}</P>
        </HeadCont>
        <BodyCont>
            <Display  arr={cat2Imgs} />
            <Results />
        </BodyCont>

        </div>
        
    }

    if(type === "Bath"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <IndicatorCont>
                <img src={chicken_indicator[0]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[5]}</P>
            </HeadCont>
        <BathCont>
            <Bath src="../stun_methods/bath_1.svg" />
            <BathChicken src="../stun_methods/bath_chicken.svg" onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Bath2',
                        }
                    })
                } />
        </BathCont>
        </div>
        
    }

    if(type === "Bath2"){
        return <div>
            <SettingCont>
                <div onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            page:1,
                        }
                    })
                }> <img src='/settings.svg' /></div>
            </SettingCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[5]}</P>
        </HeadCont>
        <BathCont>
            <Bath2 src="../stun_methods/bath_1.svg" />
            <BathChicken2 src="../stun_methods/bath_chicken.svg"/>
        </BathCont>
        <ContinueCont>
            <Continue>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }




    return <div>

        {
            page === undefined ? <h1>{heading[0]}</h1> : <h1>{heading[0]}</h1>
        }

        {/* <button onClick={
            ()=>console.log(r)
        }> Console log router</button> */}

        <button onClick={
            ()=>r.push({
                pathname:"/meat",
                query:{
                    page:page === undefined ? 1 : Number(page)+1,
                    type:"home"
                }
            })
        }>{button[0]}</button>

    </div>

}