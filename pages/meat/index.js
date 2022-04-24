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
    width:500px;
    height:450px;
    border: pink solid 2px;
    `;

    const BathChicken = styled.img`
    position:absolute;
    top:250px;
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
    top:13rem;
    border:red 2px solid;
    height:340px;
    width:100vw;
    z-index:-1;
    `;

    const Bath2 = styled.img`
    position:absolute;
    top:9rem;
    width:100vw;
    height:70vh;
    opacity:95%;
    border: green 2px solid;
    `;

    const ChKillCont = styled.div`
    display:flex;
    justify-content:center;
    right:-90px;
    width:100vw;
    height:70vh;
    border:blue solid 2px;
    `;

    const KnifeChicken = styled.img`
    transform:rotate(-90deg);
    width:500px;
    height:500px;
    padding:0rem;
    border:green solid 2px;
    `;

    const Knife = styled.img`
    position:absolute;
    transform:rotate(45deg);
    top:13rem;
    width:200px;
    height:200px;
    border:red 2px solid;
    `;

    const Knife2 = styled.img`
    position:absolute;
    transform:rotate(30deg);
    top:28rem;
    right:13rem;
    width:200px;
    height:200px;
    border:red 2px solid;
    `;

    const PluckChicken = styled.img`
    width:500px;
    height:500px;
    padding:0rem;
    border:green solid 2px;
    `;

    const Feathers = styled.img`
    position:absolute;
    top:19rem;
    `;

    const FeatherPile = styled.img`
    position:absolute;
    top:35rem;
    right:1rem;
    height:80px;
    width:80px;
    z-index:-1;
    `;

    const DecapitateChicken = styled.img`
    transform:rotate(-90deg);
    width:500px;
    height:500px;
    `;

    const Cleaver = styled.img`
    position:absolute;
    top:13rem;
    width:170px;
    height:170px;
    `;

    const DisembowelChicken = styled.img`
    width:300px;
    height:400px;
    `;

    const OrganZone = styled.div`
    position:absolute;
    top:21rem;
    height:100px;
    width:150px;
    border:green solid 2px;
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
            <BathChicken src="../stun_methods/bath_chicken2.svg" onClick={
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
            <IndicatorCont>
                <img src={chicken_indicator[1]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[5]}</P>
        </HeadCont>
        <BathCont>
            <Bath2 src="../stun_methods/bath_1.svg" />
            <BathChicken2 src="../stun_methods/bath_chicken2.svg"/>
        </BathCont>
        <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Knife',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }

    if(type === "Knife"){
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
                <img src={chicken_indicator[1]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[6]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifeChicken src="../ch/knife/stunned2.svg" />
                <Knife src='../ch/knife/knife.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Knife2',
                        }
                    })
                }  />
            </ChKillCont>
        </div>
        
    }

    if(type === "Knife2"){
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
                <img src={chicken_indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[6]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifeChicken src="../ch/knife/slit_throat.svg" />
                <Knife2 src='../ch/knife/knife.svg' />
            </ChKillCont>
        <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Pluck',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }

    if(type === "Pluck"){
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
                <img src={chicken_indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[7]}</P>
            </HeadCont>
            <ChKillCont>
                <PluckChicken src="../ch/knife/slit_throat.svg" />
                <Feathers src='../ch/Pluck/feathers2.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Pluck2',
                        }
                    })
                }  />
                <FeatherPile src='../ch/Pluck/feather_pile2.svg' />
            </ChKillCont>
        </div>
    }

    if(type === "Pluck2"){
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
                <img src={chicken_indicator[3]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[7]}</P>
            </HeadCont>
            <ChKillCont>
                <PluckChicken src="../ch/Pluck/defeathered.svg" />
                <FeatherPile src='../ch/Pluck/feather_pile2.svg' />
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
    }

    if(type === "Decapitate"){
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
                <img src={chicken_indicator[3]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[8]}</P>
            </HeadCont>
            <ChKillCont>
                <DecapitateChicken src="../ch/Pluck/defeathered.svg" />
                <Cleaver src='../ch/decapitate/cleaver.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate2',
                        }
                    })
                }  />
            </ChKillCont>
        </div>
    }

    if(type === "Decapitate2"){
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
                <img src={chicken_indicator[3]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[8]}</P>
            </HeadCont>
            <ChKillCont>
                <DecapitateChicken src="../ch/Pluck/defeathered.svg" />
                <Cleaver src='../ch/decapitate/bloody_cleaver.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate3',
                        }
                    })
                } />
            </ChKillCont>
        </div>
    }

    if(type === "Decapitate3"){
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
                <img src={chicken_indicator[4]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[8]}</P>
            </HeadCont>
            <ChKillCont>
                <DecapitateChicken src="../ch/decapitate/decapitated.svg" />
                <Cleaver src='../ch/decapitate/bloody_cleaver.svg'/>
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
    }

    if(type === "Disembowel"){
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
                <img src={chicken_indicator[4]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[9]}</P>
            </HeadCont>
            <ChKillCont>
                <DisembowelChicken src="../ch/disembowel/disembowel_organs.svg" />
                <OrganZone onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel2',
                        }
                    })
                }></OrganZone>
            </ChKillCont>
        </div>
    }

    if(type === "Disembowel2"){
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
                <img src={chicken_indicator[5]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[9]}</P>
            </HeadCont>
            <ChKillCont>
                <DisembowelChicken src="../ch/disembowel/disembowel.svg" />
                <OrganZone></OrganZone>
            </ChKillCont>
            <ContinueCont>
                <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel',
                        }
                    })
                }>{button[3]}</Continue>
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