import styled from "styled-components";

export const Container = styled.button`
 height: 50px;  
 width: 50px;

 background-color: #005AE5;
 border-radius: 8px;
 outline: none;
 border: none;

 justify-content: center;
 align-items: center;
 display: flex;

 transition: all.3s ease-in-out;

 svg {
  font-size: 30px;
 }

 &:hover {
  filter: brightness(80%);
  cursor: pointer;
 }

 @media (max-width: 450px) {
  height: 45px;
  width: 45px;

  border-radius: 6px;
  svg {
   font-size: 25px;
  }
 }
`

import { ShoppingCartIcon } from '@phosphor-icons/react';

export function MiniButton({...rest}) {
    return(
     <Container  {...rest}>
      <ShoppingCartIcon weight="bold" color="#fff"/>
     </Container>
    )
};