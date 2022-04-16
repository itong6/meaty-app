import { useRouter } from "next/router";
import { animalresults } from "../../data/res_content";

export default function Results(){

    const r = useRouter();
    const {item} = r.query;

    return<div>

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