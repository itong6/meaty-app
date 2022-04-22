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
    title:"Chicken",
    img:"../ch/head/ch_head1.svg",
    route:"chicken"
},
{
    img:"../cow/head/c_head1.svg",
    route:"cow",
},
{
    img:"../pig/head/p_head1.svg",
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
        img:"../ch/head/ch_head1.svg",
        route:"chicken1"
    },
    {
        img:"../ch/head/ch_head2.svg",
        route:"chicken2",
    },
    {
        img:"../ch/head/ch_head3.svg",
        route:"chicken3"
    }
]

export const cow1Imgs = [
    {
        img:"../cow/head/c_head1.svg",
        route:"cow1"
    },
    {
        img:"../cow/head/c_head2.svg",
        route:"cow2",
    },
    {
        img:"../cow/head/c_head3.svg",
        route:"cow3"
    }
]

export const pig1Imgs = [
    {
        img:"../pig/head/p_head1.svg",
        route:"pig1"
    },
    {
        img:"../pig/head/p_head2.svg",
        route:"pig2",
    },
    {
        img:"../pig/head/p_head3.svg",
        route:"pig3"
    }
]