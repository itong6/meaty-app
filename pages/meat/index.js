import {useRouter} from 'next/router';
import {settings,cat0Imgs, cat1Imgs, cat2Imgs, chicken1Imgs,cow1Imgs, pig1Imgs } from '../../data/selection_content';
import Display from '../../Display';
import Results from './results';
import { heading, subheading, button, chicken_indicator, indicator } from '../../data/content';
import styled from 'styled-components'
import { keyframes } from 'styled-components';
import { motion } from 'framer-motion'


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
    top:25rem;
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


    const CowKillCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    right:-90px;
    width:100vw;
    height:70vh;
    border:blue solid 2px;
    `;

    const GunCow = styled.img`
    width:375px;
    height:375px;
    padding:0rem;
    border:green solid 2px;
    `;

    const Gun = styled.img`
    position:absolute;
    bottom:0;
    right:0;
    width:300px;
    height:300px;
    border:red 2px solid;
    `;

    const Gun2 = styled.img`
    position:absolute;
    z-index:-1;
    bottom:0;
    right:0;
    width:300px;
    height:300px;
    border:red 2px solid;
    `;

    const TargetZone = styled.div`
    position:absolute;
    top:13rem;
    right:8rem;
    height:40px;
    width:40px;
    border-radius:50px;
    border: red 2px solid;
    `;

    const KnifeCow = styled.img`
    width:500px;
    height:500px;
    padding:0rem;
    border:green solid 2px;
    `;

    const DecapitateCow = styled.img`
    width:475px;
    height:475px;
    `;

    const OrganZoneCow = styled.div`
    position:absolute;
    top:14.5rem;
    width:100px;
    height:190px;
    border-radius:40px;
    border:green solid 2px;
    `;

    const ChamberPig = styled.img`
    position:absolute;
    top:30rem;
    width:200px;
    height:200px;
    padding:0rem;
    border:green solid 2px;
    `;

    const Chamber = styled.img`
    position:absolute;
    width:300px;
    height:300px;
    padding:1rem;
    border:green solid 2px;
    `;

    const ChamberDoorZone = styled.div`
    position:absolute;
    top:13rem;
    right:7rem;
    width:80px;
    height:200px;
    border:blue 2px solid;
    `;

    const KnifePig = styled.img`
    width:400px;
    height:400px;
    padding:0rem;
    border:green solid 2px;
    `;

    const OrganZonePig = styled.div`
    position:absolute;
    top:14.5rem;
    width:120px;
    height:190px;
    border-radius:40px;
    border:green solid 2px;
    `;


    // -------------
    // Styled components for end pages
    // -------------
    // Gradient animation
    const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
    let Container = styled.div`
  display: grid;
  place-content: center;
  height: 100%;

  .emoji {
    font-size: 5rem;
    position: relative;
    top: 0.75rem;
  }

  button {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    border: none;
    background-color: white;
  }
  button:hover {
    cursor: pointer;
    color: white;
    background-color: #bd0909;
    text-decoration: underline;
  }

  /* First tile styling */
  .tile {
    width: 350px;
    border-radius: 20px;
    margin-top: 1rem;
    animation: ${gradient} 12s ease infinite;
    background-size: 300% 300%;
    background-image: linear-gradient(
      45deg,
      hsl(0deg 100% 39%) 0%,
      hsl(3deg 96% 35%) 4%,
      hsl(5deg 92% 31%) 10%,
      hsl(7deg 89% 27%) 18%,
      hsl(8deg 86% 23%) 29%,
      hsl(10deg 84% 19%) 50%,
      hsl(13deg 82% 15%) 75%,
      hsl(16deg 81% 11%) 88%,
      hsl(18deg 83% 7%) 95%,
      hsl(0deg 50% 1%) 100%
    );

    p {
      margin-top: 0rem;
      margin-bottom: 1rem;
    }
  }
  .tile:hover {
    box-shadow: 0 0 16px red;
  }

  .firstTile {
    text-align: center;
    color: white;
    filter: drop-shadow(4px 4px 8px red);
    
    h2 {
      font-size: 2rem;
      margin-bottom: 0;
    }

    h3 {
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
  }

  /* Second tile styling */
  .tile2 {
    width: 350px;
    border-radius: 20px;
    margin-top: 1rem;
    animation: ${gradient} 12s ease infinite;
    background-size: 300% 300%;
    background-image: linear-gradient(
      325deg,
      hsl(37deg 82% 81%) 0%,
      hsl(38deg 83% 82%) 11%,
      hsl(39deg 84% 83%) 22%,
      hsl(39deg 86% 85%) 33%,
      hsl(40deg 87% 86%) 44%,
      hsl(41deg 89% 87%) 56%,
      hsl(42deg 91% 89%) 67%,
      hsl(44deg 94% 90%) 78%,
      hsl(45deg 96% 91%) 89%,
      hsl(48deg 100% 92%) 100%
    );

    p {
      margin-top: 0rem;
      margin-bottom: 1rem;
    }
  }
  .tile2:hover {
    box-shadow: 0 0 16px yellow;
  }

  .secondTile {
    font-family: Georgia;
    margin-left: 2rem;
    padding-bottom: 1rem;

    h3 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      font-style: italic;
      font-weight: normal;
      margin-top: 0;
      margin-bottom: 2rem
    }
  }

  /* Third tile styling */
  .tile3 {
    width: 350px;
    border-radius: 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
    animation: ${gradient} 12s ease infinite;
    background-size: 300% 300%; 
    background-image: linear-gradient(
      325deg,
      hsl(214deg 100% 35%) 0%,
      hsl(217deg 82% 33%) 11%,
      hsl(220deg 72% 31%) 22%,
      hsl(222deg 65% 27%) 33%,
      hsl(224deg 58% 23%) 44%,
      hsl(226deg 51% 20%) 56%,
      hsl(229deg 44% 16%) 67%,
      hsl(231deg 36% 12%) 78%,
      hsl(239deg 31% 7%) 89%,
      hsl(0deg 0% 0%) 100%
    );

    h1 {
      text-align: right;
      margin-top: 2rem;
      margin-bottom: 3rem;
      margin-right: 3rem;
    }
    
    p {
      margin-top: 0rem;
      margin-bottom: 1rem;
      margin-left: 2.5rem;
      font-size: 1.25rem;
      font-weight: bold;
    }

    .learnMore {
      font-size: 0.75rem;
      font-weight: normal;
      text-align: center;
      margin-top: 3rem;
      margin-right: 2.5rem;
    }

    a:hover {
      text-decoration: underline;
      filter: drop-shadow(4px 4px 8px white);
    }
  }
`


    // Page content starts below


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

    if(type === "Chamber"){
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
                <img src={indicator[0]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[13]}</P>
            </HeadCont>
            <ChKillCont>
                <ChamberPig src="../stun_methods/pig/front (1).svg" />
                <Chamber src='../stun_methods/pig/chamber.svg' />
                <ChamberDoorZone onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Chamber 2',
                        }
                    })
                } />
            </ChKillCont>
        </div>
        
    }

    if(type === "Chamber 2"){
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
                <img src={indicator[0]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[14]}</P>
            </HeadCont>
            <ChKillCont>
                <ChamberPig src="../stun_methods/pig/front (1).svg" onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Chamber 3',
                        }
                    })
                }  />
                <Chamber src='../stun_methods/pig/chamber_open.svg' />

            </ChKillCont>
        </div>
        
    }

    if(type === "Chamber 3"){
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
                <img src={indicator[0]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[15]}</P>
            </HeadCont>
            <ChKillCont>
                <Chamber src='../stun_methods/pig/pig_inside.svg' />
                <ChamberDoorZone onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Chamber 4',
                        }
                    })
                } />
            </ChKillCont>
        </div>
        
    }

    if(type === "Chamber 4"){
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
                <img src={indicator[1]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <Chamber src='../stun_methods/pig/closed_chamber.svg' />
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Knife Pig',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }

    if(type === "Knife Pig"){
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
                <img src={indicator[1]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[6]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifePig src="../pig/knife/stunned.svg" />
                <Knife src='../weapons/knife.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Knife Pig 2',
                        }
                    })
                }  />
            </ChKillCont>
        </div>
        
    }

    if(type === "Knife Pig 2"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifePig src="../pig/knife/slit_throat.svg" />
                <Knife2 src='../weapons/knife.svg' />
            </ChKillCont>
        <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate Pig',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }

    if(type === "Decapitate Pig"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[8]}</P>
            </HeadCont>
            <CowKillCont>
                <DecapitateCow src="../pig/knife/slit_throat.svg" />
                <Cleaver src='../weapons/cleaver.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate Pig 2',
                        }
                    })
                }  />
            </CowKillCont>
        </div>
    }

    if(type === "Decapitate Pig 2"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[8]}</P>
            </HeadCont>
            <CowKillCont>
                <DecapitateCow src="../pig/knife/slit_throat.svg" />
                <Cleaver src='../weapons/bloody_cleaver.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate Pig 3',
                        }
                    })
                }  />
            </CowKillCont>
        </div>
    }

    if(type === "Decapitate Pig 3"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <CowKillCont>
                <DecapitateCow src="../pig/decapitate/decapitated.svg" />
                <Cleaver src='../weapons/bloody_cleaver.svg' />
            </CowKillCont>
        <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel Pig',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
    }

    if(type === "Disembowel Pig"){
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
                <img src={indicator[3]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[9]}</P>
            </HeadCont>
            <ChKillCont>
                <DisembowelChicken src="../pig/disembowel/disembowel_organs.svg" />
                <OrganZonePig onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel Pig 2',
                        }
                    })
                } />
            </ChKillCont>
        </div>
    }

    if(type === "Disembowel Pig 2"){
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
                <img src={indicator[4]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <DisembowelChicken src="../pig/disembowel/disembowel.svg" />
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
    }

    if(type === "Stun Gun"){
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
                <img src={indicator[0]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[10]}</P>
            </HeadCont>
            <ChKillCont>
                <GunCow src="../stun_methods/cow/gun1.svg" />
                <Gun src='../weapons/held gun.svg' />
                <TargetZone onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Stun Gun2',
                        }
                    })
                }/>
            </ChKillCont>
        </div>
        
    }

    if(type === "Stun Gun2"){
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
                <img src={indicator[1]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <GunCow src="../stun_methods/cow/front_stunned.svg" />
                <Gun2 src='../weapons/held gun.svg' />
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Knife Cow',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }

    if(type === "Knife Cow"){
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
                <img src={indicator[1]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[6]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifeCow src="../cow/knife/stunned.svg" />
                <Knife src='../weapons/knife.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Knife Cow 2',
                        }
                    })
                }  />
            </ChKillCont>
        </div>
        
    }

    if(type === "Knife Cow 2"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifeCow src="../cow/knife/slit_throat.svg" />
                <Knife2 src='../weapons/knife.svg' />
            </ChKillCont>
        <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate Cow',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
        
    }

    if(type === "Decapitate Cow"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[11]}</P>
            </HeadCont>
            <CowKillCont>
                <DecapitateCow src="../cow/knife/slit_throat.svg" />
                <Cleaver src='../weapons/cleaver.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate Cow 2',
                        }
                    })
                }  />
            </CowKillCont>
        </div>
    }

    if(type === "Decapitate Cow 2"){
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
                <img src={indicator[2]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[11]}</P>
            </HeadCont>
            <CowKillCont>
                <DecapitateCow src="../cow/knife/slit_throat.svg" />
                <Cleaver src='../weapons/bloody_cleaver.svg' onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Decapitate Cow 3',
                        }
                    })
                }  />
            </CowKillCont>
        </div>
    }

    if(type === "Decapitate Cow 3"){
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
                <img src={indicator[3]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <DecapitateCow src="../cow/decapitate/decapitate.svg" />
                <Cleaver src='../weapons/bloody_cleaver.svg' />
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel Cow',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
    }

    if(type === "Disembowel Cow"){
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
                <img src={indicator[3]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[12]}</P>
            </HeadCont>
            <ChKillCont>
                <DisembowelChicken src="../cow/disembowel/disembowel_organs.svg" />
                <OrganZoneCow onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'Disembowel Cow 2',
                        }
                    })
                } />
            </ChKillCont>
        </div>
    }

    if(type === "Disembowel Cow 2"){
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
                <img src={indicator[4]} />
            </IndicatorCont>
            <HeadCont>
                <H1>{heading[2]}</H1>
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <DisembowelChicken src="../cow/disembowel/disembowel.svg" />
            </ChKillCont>
            <ContinueCont>
            <Continue  onClick={
                    ()=>r.push({
                        pathname:"/meat",
                        query:{
                            type:'',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
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
            <Bath src="../stun_methods/ch/bath_1.svg" />
            <BathChicken src="../stun_methods/ch/bath_chicken2.svg" onClick={
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
                <P>{subheading[16]}</P>
        </HeadCont>
        <BathCont>
            <Bath2 src="../stun_methods/ch/bath_1.svg" />
            <BathChicken2 src="../stun_methods/ch/bath_chicken2.svg"/>
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
                <Knife src='../weapons/knife.svg' onClick={
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
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <KnifeChicken src="../ch/knife/slit_throat.svg" />
                <Knife2 src='../weapons/knife.svg' />
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
                <P>{subheading[16]}</P>
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
                <Cleaver src='../weapons/cleaver.svg' onClick={
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
                <Cleaver src='../weapons/bloody_cleaver.svg' onClick={
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
                <P>{subheading[16]}</P>
            </HeadCont>
            <ChKillCont>
                <DecapitateChicken src="../ch/decapitate/decapitated.svg" />
                <Cleaver src='../weapons/bloody_cleaver.svg'/>
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
                <P>{subheading[16]}</P>
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
                            type:'end1',
                        }
                    })
                }>{button[3]}</Continue>
        </ContinueCont>
        </div>
    }
    
    // -------------
    // Ending Pages
    // -------------
    // Chicken
    if(type === "end1"){
        return <Container>

            {/* First tile for chicken */}
            <motion.div className='tile' initial='onLoad' animate='visible' variants={{
                onLoad: {
                    scale: .4,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .3
                    }
                }
            }}>
                <div className='firstTile' onClick={() => alertChicken()}>
                    <h2>Congrats!</h2>
                    <h3>Claudia is dead.</h3>
                    <p className='emoji'>🐔 💀 🍗</p>
                    <p>Want to slaughter another animal?</p>
                    <button onClick={() => r.push({
                        pathname: '/meat'
                    })}>RESTART</button>
                </div>
            </motion.div>

            {/* Second tile for chicken*/}
            <motion.div className='tile2' initial='onLoad' animate='visible' variants={{
                onLoad: {
                    scale: .4,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .35
                    }
                }
            }}>
                <div className='secondTile'>
                    <h3>Higgleby, Piggleby, My Black Hen</h3>
                    <h4>By Anonymous</h4>
                    <p>Higgleby, piggleby, my black hen, </p>
                    <p>She lays eggs for gentlemen;</p>
                    <p>Sometimes nine, and sometimes ten,</p>
                    <p>Higgleby, piggleby, my black hen.</p>
                </div>
            </motion.div>

            {/* Third tile for chicken*/}
            <motion.div className='tile3' initial='onLoad' animate='visible' variants={{
                onLoad: {
                    scale: .4,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .35
                    }
                }
            }}>
                <div className='thirdTile'>
                    <h1>Did you know...</h1>
                    <p><a href='https://www.smithsonianmag.com/science-nature/14-fun-facts-about-chickens-65848556/' target='_blank'>...chickens are omnivorous?</a></p>
                    <p><a href='https://spca.bc.ca/news/fun-facts-about-chickens/' target='_blank'>... chickens live in groups called flocks?</a></p>
                    <p><a href='https://www.peta.org/action/10-surprising-facts-chickens/' target='_blank'>... mother hens talk to their eggs?</a></p>
                    <p className='learnMore'><a href='https://en.wikipedia.org/wiki/Chicken' target='_blank'>Learn more about chickens</a></p>
                </div>
            </motion.div>
        </Container>
    }

    // Cow



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
                    page: Number(page)+1,
                    type:"home"
                }
            })
        }>{button[0]}</button>

    </div>

}

// Functions for end screens
export function alertChicken() {
    alert("You're a bad person.");
}