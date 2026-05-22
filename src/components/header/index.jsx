import styled from "styled-components";

const Container = styled.header`
flex: 1;
height: fit-content;

border-bottom: 1px solid #181C24;
padding: 0 25px;


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

@media (max-width: 450px) {
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
import { NavLink } from "react-router";

import { InputSearch } from "../inputSearch";
import { MiniButton } from "../miniButton";
import { Button } from "../button";

export function Header() {
    return(
     <Container>
      <div className="Desktop">
       <img src='/icon.svg' alt="ACStore" id="ICON"/>

       <div className="inputDiv">
        <InputSearch/>
       </div>

       <div className="buttons">
       <NavLink to="/">
         <Button text="Solicitar Orçamento"/>
        </NavLink>

        <NavLink to="/">
         <MiniButton />
        </NavLink>
       </div>
      </div>

      <div className="Mobile">
       <img src='/icon.svg' alt="ACStore" id="ICON"/>

       <NavLink to="/">
         <Button text="Solicitar Orçamento"/>
        </NavLink>
      </div>
     </Container>
    )
};