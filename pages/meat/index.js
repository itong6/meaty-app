import {useRouter} from 'next/router';
import {cat0Imgs, cat1Imgs, cat2Imgs, chicken1Imgs,cow1Imgs, pig1Imgs } from '../../data/animal_content';
import Display from '../../Display';
import Results from './results';


export default function Meat(){
    const r = useRouter();
    const {page, type} = r.query;
    

    if(page === '2'){
        return <div>
            <h1>Disclaimer</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"meat",
                    query:{
                     page:Number(page)+1
                    }
                })
            }> I Understand</button>
        </div>
    }

    if(page === '3'){
        return <div class='bodycont'>
            <h1>Select an Animal</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <Display  arr={cat0Imgs} />
            <Results />
        </div>
        
    }

    if(type === "Select Chicken"){
        return <div>
            <h1>Select a Chicken</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <Display arr={chicken1Imgs} />

        </div>
        
    }

    if(type === "Select Cow"){
        return <div>
            <h1>Select a Cow</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <Display arr={cow1Imgs} />

        </div>
        
    }

    if(type === "Select Pig"){
        return <div>
            <h1>Select a Pig</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <Display arr={pig1Imgs} />

        </div>
        
    }

    if(type === "Stun Method"){
        return <div>
            <h1>Select a Stun Method</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <Display arr={cat1Imgs} />

        </div>
        
    }

    if(type === "Chicken Stun Method"){
        return <div>
            <h1>Select a Stun Method</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <Display arr={cat2Imgs} />

        </div>
        
    }

    if(type === "Bath"){
        return <div>
            <h1>Bath</h1>
            <button onClick={
                ()=>r.push({
                    pathname:"/meat",
                    query:{
                        page:1,
                    }
                })
            }> Go back</button>
            
            <img src="/bath.svg" />

        </div>
        
    }




    return <div>

        {
            page === undefined ? <h1>Meaty</h1> : <h1>Meaty</h1>
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
        }>Start</button>

    </div>

}