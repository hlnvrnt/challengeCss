import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components';


const Contour = styled.section `
border-style: solid;
border-radius: 10px;
width: 60vw;
margin:left: 50px;
`;

const Head = styled.header`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  `;

const Image = styled.img`
object-fit: cover;
`;

const Title = styled.h1`
font-size : 30px;
font-family: serif;
`;

const Secondtitle = styled.h2`
font-size : 20px;
font-family: serif;
`;

const Subtitle = styled.h3`
font-size : 15px;
font-family: serif;
`;

const Items = styled.div`
display: flex;
jusitfy-content: space-around;
gap: 50px;
`;

const Bouton = styled.button`
background-color: grey;
color: white;
border-radius: 10px;
border-style: solid;
font-size : 13px;
`;

const Paragraph = styled.p`
font-size : 13px;
font-family: serif;
`;

function App() {
  
  return (
    <Contour>
      <Head>
        <img src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Title>Title</Title>
      <Secondtitle>Second Text</Secondtitle>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum, iste eveniet aliquam dolorem eligendi eaque in omnis quisquam quasi! Corrupti possimus aut cum minima alias, maiores incidunt ex id.</Paragraph>
      </Head>
      <div>
        <Subtitle>Subtitle</Subtitle>
        <Items>
          <Bouton>item 1</Bouton>
          <Bouton>item 2</Bouton>
          <Bouton>item 3</Bouton>
          <Bouton>item 4</Bouton>
        </Items>
      </div>
    </Contour>
  )
}

export default App
