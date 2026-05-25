import styled from "styled-components";

export const Container = styled.button`
 width: fit-content;
 height: 50px;

 background-color: #005AE5;
 outline: none;
 border: none;
 border-radius: 8px;
 overflow: hidden;

 align-items: center;
 display: flex;
 gap: 10px;

 padding: 0 0 0 10px;

 transition: all.3s ease-in-out;

 &:hover {
  filter: brightness(80%);
  cursor: pointer;
 }



 span {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
 }

 .set {
  height: 50px;
  width: 50px;

  background-color: #0352DE;

  justify-content: center;
  align-items: center;
  display: flex;

   svg {
    font-size: 30px;
   }
 }

 @media (max-width: 450px) {
  height: 45px;
  gap: 7px;

  span {
   font-size: 12px;
  }

  .set {
   height: 45px;
   width: 45px;

   svg {
    font-size: 25px;
   }
  }
 }
`

import { ArrowRightIcon } from '@phosphor-icons/react';

export function Button({text, ...rest}) {
    return(
     <Container {...rest}>
      <span>{text}</span>
      <div className="set">
       <ArrowRightIcon weight="bold" color="#fff"/>
      </div>
     </Container>
    )
}