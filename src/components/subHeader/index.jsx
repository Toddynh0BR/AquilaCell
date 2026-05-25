import styled from "styled-components";

const Container = styled.div`
flex: 1;
height: fit-content;

border-bottom: 1px solid #181C24;
padding: 0 50px;

.Desktop, .Mobile {
 height: 65px;

 justify-content: space-between;
 align-items: center;
 display: flex;
 gap: 10px;
 
 li {
  font-size: 18px;
  color: #fff;

  align-items: center;
  display: flex;
  gap: 5px;

  list-style: none;

  transition: all.3s ease-in-out;

  img {
   transition: all.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #0352DE;

    img {
     filter: brightness(80%);
    }
  }
 }
}

.Mobile {
 display: none;
}

@media (max-width: 900px) {
 padding: 0 10px;

 .Desktop {
  display: none;
 }

 .Mobile {
  display: flex;
 }
}
`

import phone from './assets/phone.png'
import desktop from './assets/desktop.png'
import mouse from './assets/mouse.png'
import headset from './assets/headset.png'
import watch from './assets/watch.png'
import games from './assets/games.png'
import devices from './assets/devices.png'

const categories = [
 {
  icon: phone,
  name: 'Celulares'
 },   
 {
  icon: desktop,
  name: 'Eletrônicos'
 },   
 {
  icon: mouse,
  name: 'Acessórios'
 },   
 {
  icon: headset,
  name: 'Áudio'
 },   
 {
  icon: watch,
  name: 'Smartwatch'
 },   
 {
  icon: games,
  name: 'Games'
 },   
 {
  icon: devices,
  name: 'Informática'
 },   
];

import { InputSearch } from '../inputSearch';
import { MiniButton } from '../miniButton';

export function SubHeader() {
    return(
     <Container>
      <ul className="Desktop">
       {categories.map((item, index)=> (
        <li key={index}>
         <img src={item.icon} alt="icon" />
         {item.name}
        </li>
       ))}
      </ul>

      <div className="Mobile">
       <InputSearch />
       <MiniButton/>
      </div>
     </Container>
    )
}