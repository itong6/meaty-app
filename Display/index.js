import { useRouter } from 'next/router';
import styled from 'styled-components';
import { catImgs } from '../data/selection_content';


const DispCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:82vh;
width:41vw;

border: red 2px solid;
`;

const ImgCont = styled.div`
display:flex;
flex-direction:column;
align-item:center;
justify-content:center;
width:160px;
height:160px;
border:#000000 solid 3px;
border-radius:20px;
margin-bottom:2rem;
margin-left:2rem;
padding:2rem;
`;

const DispImg = styled.img`
object-fit:cover
width:100%;
height:100%;
`;

const DispTitle = styled.text`
display:flex;
font-family: Ubuntu;
justify-content:center;
margin-bottom:1rem;
`;

export default function Display({
  arr=[]
}){

  const r = useRouter();
  const {page, type} = r.query
  return <DispCont>
    {
      arr.map((o,i)=><ImgCont onClick={
        ()=>r.push({
          pathname:"/meat",
          query:{
            item:o.route,
            page:page,
            type:type
          }
        })
      }>
      {/* <DispTitle>{catImgs[i].title}</DispTitle> */}
      <DispImg src={o.img} />
      </ImgCont>)
    }
  </DispCont>
}
