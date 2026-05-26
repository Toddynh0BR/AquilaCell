import styled from "styled-components";

export const Container = styled.div`
flex: 1;
`

export const Main = styled.main`
flex: 1;

padding: 20px 50px;

align-items: flex-start;
flex-direction: column;
display: flex;
gap: 20px;

.Return {
 align-items: center;
 display: flex;

 span {
  font-family: 'Host Grotesk';
  font-size: 16px;
  color: #fff;

  transition: all.3s ease-in-out;
 }

  transition: all.3s ease-in-out;

 &:hover {
  filter: brightness(50%);
  cursor: pointer;

  span {
   color: #005AE5;
  }
 }
}

.product {
 height: fit-content;
 width: 100%;

 justify-content: space-between;
 align-items: flex-start;
 display: flex;

 .IMGs {
  width: 45%;

  align-items: flex-start;
  display: flex;
  gap: 10px;

  .IMAGE {
    height: fit-content;
    width: 100%;

    background-color: #0a0e17;
    border-radius: 8px;

-webkit-box-shadow: inset 0px 0px 24px 4px #000000; 
box-shadow: inset 0px 0px 24px 4px #000000;

    img {
     height: auto;
     width: 100%;

     object-fit: contain;
    }
  }

  .columnImages {
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 5px;

    .img {
     height: fit-content;
     width: fit-content;
     border-radius: 8px;

    background-color: #0a0e17;
    border-radius: 8px;

-webkit-box-shadow: inset 0px 0px 24px 4px #000000; 
box-shadow: inset 0px 0px 24px 4px #000000;

     img {
     height: 80px;
     width: 80px;

     object-fit: contain;
     
    }

    cursor: pointer;
    }
  }
 }

 .Info {
  height: fit-content;
  width: 40%;

  align-items: flex-start;
  flex-direction: column;
  display: flex;
  gap: 5px;

  h4 {
   font-family: 'Host Grotesk';
   font-weight: bold;
   color: #005AE5;
   font-size: 14px;

   text-transform: uppercase;
  }
  h2 {
   font-family: 'Host Grotesk';
   font-weight: bold;
   font-size: 32px;
   color: #fff;

  }

  .stars {
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 1px;

  margin-bottom: 10px;
  margin-top: 5px;
  
  span {
    font-family: 'Host Grotesk', sans-serif;
    color: #A6A9AE;
    font-weight: 300;
    font-size: 16px;

    margin-left: 1px;
  }
  }

  h1 {
  font-family: 'Host Grotesk';
  font-weight: bold;
  font-size: 48px;
  color: #fff;

  margin-bottom: 30px;

  align-items: flex-end;
  display: flex;
  gap: 10px;

  strong {
    font-weight: normal;
    color: #00BFFF;
    font-size: 16px;

    margin-bottom: 10px;
  }
  }

  h3 {
    font-family: 'Host Grotesk', sans-serif;
    font-weight: bold;
    color: #444748;
    font-size: 14px;
  }

  .variations {
    align-items: center;
    display: flex;
    gap: 10px;

    margin-top: 11px;
    margin-bottom: 30px;

    .variation {
     height: 55px;
     width: fit-content;

     border: 1px solid #C4C7C7;
     padding: 0px 20px;
     border-radius: 8px;

     justify-content: center;
     align-items: center;
     display: flex;

     font-family: 'Host Grotesk', sans-serif;
     font-size: 16px;
     color: #fff;

     transition: all.3s ease-in-out;

     &:hover {
      background-color: #fff;
      color: #0a0e17;
      cursor: pointer;
     }
    }
  }

  .colors {
    align-items: center;
    display: flex;
    gap: 10px;

    margin-top: 11px;
    margin-bottom: 40px;

    .color {
     height: 40px;
     width: 40px;

     border: 1px solid #C4C7C7;
     border-radius: 50%;
     padding: 3px;

     justify-content: center;
     align-items: center;
     display: flex;

     transition: all.3s ease-in-out;

     div {
      height: 100%;
      width: 100%;

      border-radius: 100%;
     }

     &:hover {
      filter: brightness(80%);
      cursor: pointer;
     }
    }

    .color:nth-child(1) div {
      background-color: #8E8E93;
    }
    .color:nth-child(2) div {
      background-color: #000;
    }
    .color:nth-child(3) div {
      background-color: #fff;
    }
  }

  button {
    height: 55px;
    width: 80%;

    border-radius: 8px;
    outline: none;
    border: none;

    margin-bottom: 5px;

    font-family: 'Host Grotesk', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #fff;

    transition: all.3s ease-in-out;
    cursor: pointer;

  }
  button:nth-of-type(1) {
    background-color: #005AE5;
    border: 1px solid transparent;

    &:hover {
     background-color: transparent;
     border: 1px solid #C4C7C7;
    }
  }
  button:nth-of-type(2) {
   background-color: transparent;
   border: 1px solid #C4C7C7;

   &:hover {
    background-color: #005AE5;
    border: 1px solid #005AE5;
   }
  }
  }filter: brightness(80%);


}

.reviews {
height: fit-content;
width: 100%;

position: relative;

&::before {
 content: ' ';
 height: 100%;
 width: 100%;

 position: absolute;
 top: 0;
}

img {
    height: auto;
    width: 100%;
    
    object-fit: contain;
    -webkit-user-select: none;  /* Safari */
    -ms-user-select: none;      /* IE 10 e Edge */
    user-select: none;          /* Padrão (Chrome, Firefox, Opera) */
    -webkit-user-drag: none; 
}
}

h5 {
 font-family: 'Host Grotesk', sans-serif;
 font-weight: bold;
 font-size: 32px;
 color: #fff;

 margin: 20px 0;
}

@media (max-width: 900px) {
 padding: 10px 10px;
 gap: 10px;

 .product {
 justify-content: flex-start;
 flex-direction: column;

 .IMGs {
  width: 100%;
  gap: 5px;

  .columnImages {
    .img {
     img {
     height: 60px;
     width: 60px;
     
    }
    }
  }
 }

 .Info {
  width: 100%;

  h1 {
  font-size: 32px;
  margin-bottom: 15px;

  strong {
    font-size: 14px;
    margin-bottom: 5px;
  }
  }

  button {
    height: 55px;
    width: 100%;
  }

}


}


}
`

export const Products = styled.div`
flex: 1;
height: fit-content;

margin-bottom: 40px;
margin-top: 50px;
padding: 0 50px;

flex-direction: column;
display: flex;

h3 {
 font-family: 'Host Grotesk', sans-serif;
 font-weight: 600;
 font-size: 18px;
 color: #005AE5;
}

h2 {
 font-family: 'Host Grotesk', sans-serif;
 font-weight: 700;
 font-size: 36px;
 color: #fff;   
}

.products {
 margin-top: 15px;
 flex: 1;
 height: fit-content;
}

.product {
 height: 280px;
 width: 215px;

 background-color: #0C1119;
 border: 1px solid #10141B;
 border-radius: 8px;
 padding: 5px;

 flex-direction: column;
 align-items: center;
 display: flex;

 img {
  height: 150px;
  width: 150px;
  object-fit: contain;
 }

 p {
  font-family: 'Host Grotesk', sans-serif;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  color: #fff;

  margin-bottom: 10px;
  width: 100%;
  
  strong {
   font-size: 14px;
   font-weight: 400;
   color: #A6A9AE;
  }
 }

 .stars {
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 1px;

  margin-bottom: 10px;
  
  span {
    font-family: 'Host Grotesk', sans-serif;
    color: #A6A9AE;
    font-weight: 300;
    font-size: 12px;

    margin-left: 1px;
  }
 }

 .buy {
  width: 100%;

  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  
  h4 {
   font-family: 'Host Grotesk';
   font-weight: bolder;
   font-size: 16px;
   color: #fff;

   h5 {
     font-weight: 500;
     color: #A6A9AE;
     font-size: 12px;
   }
  }
 }

 transition: all.3s ease-in-out;

 &:hover {
  filter: brightness(80%);
  transform: scale(103%);
  cursor: pointer;
 }
}

@media (max-width: 900px) {
 margin-bottom: 20px;
 margin-top: 20px;

 padding: 0 10px;

 h3 {
  font-size: 16px;
 }
 h2 {
  font-size: 32px;
  br {
    display: none;
  }
 }
}
`