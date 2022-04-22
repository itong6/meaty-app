import { useRouter } from 'next/router';
import styled from 'styled-components';


const DispCont = styled.div`
display:flex;
flex-direction:column;
height:100vh;
border: red 2px solid;
`;

const ImgCont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width:200px;
height:200px;
border:#DDD solid 7px;
border-radius:10px;
margin:50px;
padding:50px
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
            item:o.route,
          }
        })
      }>
      <h3>animal</h3>
      <DispImg src={o.img} />
      </ImgCont>)
    }
  </DispCont>
}