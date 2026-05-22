import styled from "styled-components";

const Container = styled.div`
flex: 1;
height: 50px;

background-color: #0A0E17;
border-radius: 8px;

align-items: center;

display: flex;

input {
 flex: 1;
 height: 100%;

 padding: 0 15px;

 background-color: transparent;
 border: 1px solid #555C65;
 border-radius: 8px 0px 0px 8px;
 border-right: none;
 outline: none;

 font-size: 16px;
 color: #ffffff;

 &::placeholder {
  color: #5E626B;
 }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #0A0E17 inset !important;
  -webkit-text-fill-color: #fff !important;
  transition: background-color 5000s ease-in-out 0s;
}

button {
 height: 52px;
 width: 55px;

 background-color: #005AE5;
 border-radius: 0 8px 8px 0;
 border: 1px solid #005AE5;
 outline: none;

 justify-content: center;
 align-items: center;
 display: flex;

 transition: all.3s ease-in-out;

 &:hover {
  filter: brightness(80%);
  cursor: pointer;
 }

 svg {
  font-size: 30px;
 }
}

@media (max-width: 450px) {
 height: 45px;
 border-radius: 6px;

 input {
  padding: 0 10px;
  font-size: 14px;
 }

 button {
  height: 47px;

  border-radius: 0 6px 6px 0;
 }
}
`

import { MagnifyingGlassIcon } from '@phosphor-icons/react';

export function InputSearch() {
    return(
     <Container>
      <input autoComplete="off" type="text" id="search" placeholder="Oque você procura?"/>  

      <button>
       <MagnifyingGlassIcon weight="bold" color="#fff"/>
      </button>
     </Container>
    )
}