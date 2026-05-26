import styled from "styled-components";

const Container = styled.header`
flex: 1;
height: fit-content;

border-bottom: 1px solid #181C24;
padding: 0 50px;


#ICON {
height: 90px;
width: 150px;

object-fit: contain;
margin-right: 20px;
}

.inputDiv {
 width: 50%;
}

.buttons {
 align-items: center;
 display: flex;
 gap: 20px;
}

.Desktop, .Mobile {
flex: 1;
height: 90px;

justify-content: space-between;
align-items: center;
display: flex;
gap: 50px;
}

.Mobile {
 display: none;
}

@media (max-width: 900px) {
 .Desktop {
  display: none;
 }
 .Mobile {
  height: 80px;
  display: flex;
  gap: 20px;
 }

 padding: 0 10px;

 #ICON {
  height: 70px;
  width: 130px;
  margin-right: 0px;
 }
}
`
import { Link } from "react-router";

import { InputSearch } from "../inputSearch";
import { MiniButton } from "../miniButton";
import { Button } from "../button";

export function Header() {
    return(
     <Container>
      <div className="Desktop">
       <Link to='/'>
         <img src='/icon.svg' alt="ACStore" id="ICON"/>
       </Link>

       <div className="inputDiv">
        <InputSearch/>
       </div>

       <div className="buttons">
       <a target="blank" href="https://wa.me/5581991662040?text=Ol%C3%A1!%20Tenho%20interesse%2C%20gostaria%20de%20saber%20mais.">
         <Button text="Solicitar Orçamento"/>
        </a>

        <Link to="/">
         <MiniButton />
        </Link>
       </div>
      </div>

      <div className="Mobile">
       <img src='/icon.svg' alt="ACStore" id="ICON"/>

       <a target="blank" href="https://wa.me/5581991662040?text=Ol%C3%A1!%20Tenho%20interesse%2C%20gostaria%20de%20saber%20mais.">
         <Button text="Solicitar Orçamento"/>
        </a>
      </div>
     </Container>
    )
};