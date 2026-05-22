import { useState } from 'react'
import * as S from "./styles.js";

import { NavLink } from "react-router";

import { Header } from '../../components/header';
import { SubHeader } from '../../components/subHeader';

export function Home() {

  return (
   <S.Container>
    <Header/>
    <SubHeader/>
   </S.Container>
  )
}

