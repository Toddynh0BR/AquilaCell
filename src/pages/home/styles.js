import styled from "styled-components";

export const Container = styled.div`
flex: 1;
`

export const Main = styled.main`
min-height: 90vh;
width: 100%;

justify-content: space-between;
display: flex;
gap: 50px;

padding: 50px 50px 0px 50px;

.texts {
 width: 50%;

 flex-direction: column;
 display: flex;
 gap: 5px;

 h2 {
  font-family: "Host Grotesk", sans-serif;
  font-weight: 500;
  color: #005AE5;
  font-size: 26px;
 }
 h1 {
  font-family: "Host Grotesk", sans-serif;
  line-height: 70px;
  font-weight: 700;
  font-size: 64px;
  color: #fff;
  strong {
     color: #005AE5;
  }
 }
 p {
  font-family: "Host Grotesk", sans-serif;
  color: #A6A9AE;
  font-size: 16px;
 }

 .icons {
  height: 40px;
  width: 80%;

  justify-content: space-between;
  align-items: center;
  display: flex;

  margin: 20px 0;
  .icon {
   img {
    height: 40px;
    width: 40px;
   }


   span {
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    color: #fff;

    p {
     color: #A6A9AE;
     font-size: 14px;
    }
   }
   align-items: center;
   display: flex;
   gap: 5px;
  }
 }
}

#MainImage {
 height: auto;
 width: 50%;

 object-fit: contain;
 margin-top: -100px;
}

@media (max-width: 900px) {
  
}
`

export const BigImage = styled.div`
flex: 1;
height: fit-content;

justify-content: center;
padding: 0 50px;
display: flex;

margin-top: -90px;
margin-bottom: 40px;

main {
 height: 350px;
 width: 100%;

 background-color: #010915;
 border: 1px solid #4470A0;
 border-radius: 16px;
 padding-right: 10px;
 overflow: hidden;

 align-items: center;
 display: flex;

 #Image {
  height: 100%;
  width: auto;

  object-fit: contain;
 }

 .part1 {
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  gap: 5px;

  height: 95%;
  width: 40%;

  border-right: 1px solid #A6A9AE;
  padding: 0 15px 0 10px;

  h2 {
   font-family: 'Host Grotesk', sans-serif;
   line-height: 48px;
   font-weight: 700;
   font-size: 45px;
   color: #fff;
  }

  p {
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    color: #A6A9AE;
  }

  ul {
   justify-content: center;
   flex-direction: column;
   display: flex;

   margin-bottom: 10px;

    li {
     font-family: 'Host Grotesk', sans-serif;
     font-size: 14px;
     color: #A6A9AE;
     
     list-style: none;

     align-items: center;
     display: flex;
     gap: 4px;
    }
  }
 }
 .part2 {
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  gap: 20px;

  margin-left: 10px;

  height: 95%;
  width: 25%;

 .icons {
  flex-direction: column;
  display: flex;
  gap: 10px;

  .icon {
   svg {
    height: 40px;
    width: 40px;
   }

   span {
    font-family: 'Host Grotesk', sans-serif;
    font-size: 14px;
    color: #fff;

    p {
     color: #A6A9AE;
     font-size: 14px;
    }
   }
   align-items: center;
   display: flex;
   gap: 5px;
  }
 }

  img {
    height: 55px;
    width: auto;
    object-fit: contain;
    
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
`

export const ImageBar = styled.div`
flex: 1;
height: fit-content;

margin: 0 50px 40px;

img {
 height: auto;
 width: 100%;

 object-fit: contain;
}
`