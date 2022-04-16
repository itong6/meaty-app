import { useRouter } from 'next/router';
import styled from 'styled-components';

const DispCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
border: red 2px solid;
`;

const ImgCont = styled.div`
display:flex;
justify-content: center;
width:200px;
height:200px;
border:#DDD solid 7px;
border-radius:10px;
margin:50px;
padding:40px
`;

const DispImg = styled.img`
object-fit:cover
width:100%;
height:100%;
`;

export default function Display({
  arr=[]
}){

  const r = useRouter();
  return <DispCont>
    {
      arr.map((o,i)=><ImgCont onClick={
        ()=>r.push({
          pathname:"/meat/results",
          query:{
            item:o.route
          }
        })
      }>
      <DispImg src={o.img} />
      </ImgCont>)
    }
  </DispCont>
}