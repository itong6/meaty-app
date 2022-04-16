import { route } from "next/dist/server/router";

export const header = "Select an Animal"

export const cat0 = {
    title:"",
    route:"an"
}

// export const cat1 = {
//     title:"pig",
//     route:"pig"
// };

// export const cat2 = {
//     title:"chicken",
//     route:"chicken"
// };

// export const cat3 = {
//     title:"cow",
//     route:"cow"
// };

//imgs

export const cat0Imgs = [
{
    img:"../animal_heads/animal1.jpeg",
    route:"chicken"
},
{
    img:"../animal_heads/animal2.jpeg",
    route:"cow",
},
{
    img:"../animal_heads/animal3.jpeg",
    route:"pig"
}
]

export const cat1Imgs = [
    {
        img:"/chamber.svg",
        route:"chamber"
    },
    {
        img:"/gun.svg",
        route:"gun",
    },
    {
        img:"/tongs.svg",
        route:"tongs"
    }
]

export const cat2Imgs = [
    {
        img:"/bath.svg",
        route:"bath"
    },
    {
        img:"/gun.svg",
        route:"gun",
    },
    {
        img:"/tongs.svg",
        route:"tongs"
    }
]

export const chicken1Imgs = [
    {
        img:"/chicken.png",
        route:"chicken1"
    },
    {
        img:"/chicken.png",
        route:"chicken2",
    },
    {
        img:"/chicken.png",
        route:"chicken3"
    }
]

export const cow1Imgs = [
    {
        img:"/cow.png",
        route:"cow1"
    },
    {
        img:"/cow.png",
        route:"cow2",
    },
    {
        img:"/cow.png",
        route:"cow3"
    }
]

export const pig1Imgs = [
    {
        img:"/pig.png",
        route:"pig1"
    },
    {
        img:"/pig.png",
        route:"pig2",
    },
    {
        img:"/pig.png",
        route:"pig3"
    }
]