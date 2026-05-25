import styled from "styled-components";

const Container = styled.footer`
flex: 1;
height: fit-content;

flex-direction: column;
display: flex;

padding: 0 50px;

.links {
 width: 100%;

 justify-content: space-between;
 align-items: flex-start;
 display: flex;

 section { 
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  gap: 5px;

  .Logo {
    height: auto;
    width: 130px;

    object-fit: contain;
  }

  p {
    font-family: 'Host Grotesk', sans-serif;
    color: #A6A9AE;
    font-size: 14px;
  }

  .icons {
    align-items: center;
    display: flex;
    gap: 8px;

    margin-top: 5px;

    .icon {
     height: 25px;
     width: 25px;

     transition: all.3s ease-in-out;

     &:hover {
      cursor: pointer;
      transform: scale(110%);
     }
    }
  }

  h4 {
   font-family: 'Host Grotesk', sans-serif;
   font-weight: 500;
   color: #E9E9E9;
   font-size: 16px;

   margin-bottom: 4px;
   margin-top: 60px;
  }

   h3 {
   font-family: 'Host Grotesk', sans-serif;
   font-weight: 500;
   color: transparent;
   font-size: 16px;

   margin-bottom: 4px;
   margin-top: 60px;
  }

  li {
   list-style: none;
   font-family: 'Host Grotesk', sans-serif;
   color: #A6A9AE;
   font-size: 14px;

   transition: all.3s ease-in-out;

   &:hover {
    cursor: pointer;
    color: #0352DE;
   }
  }
 }

 section:nth-child(4) {
  display: none;
 }
 section:nth-child(6) {
    ul {
     li {
      align-items: flex-start;
      display: flex;
      gap: 3px;

      &:hover {
        color: #A6A9AE;
        cursor: default;
      }
     }
    }
 }
}

.line {
 height: 1px;
 width: 100%;

 margin: 35px 0;
 background-color: #A6A9AE;
}

small {
 font-family: 'Host Grotesk', sans-serif;
 font-weight: bold;
 font-size: 12px;
 color: #A6A9AE;

 text-align: center;

 margin-bottom: 30px;
}

@media (max-width: 760px) {
 padding: 0 10px;

 .links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  'section1 section1'
  'section2 section3'
  'section4 section5'
  'section6 section7'
  ;

  section {
    h4 {
     margin-top: 0;
    }
    h3 {
     display: none;
    }
  }

  section:nth-child(1) {

    grid-area: section1;
    p {
     br {
      display: none;
     }
    }
  }
  section:nth-child(2) {
   grid-area: 'section2';
  }
  section:nth-child(3) {
   grid-area: 'section3';
  }
  section:nth-child(4) {
   display: flex;
  }
  section:nth-child(5) {
   grid-area: 'section5';
  }
  section:nth-child(6) {
   grid-area: 'section6';
  }
 }
}
`

const baseUrl =
  typeof window !== 'undefined'
    ? window.location.origin
    : ''


const IconsC = [
 {
  img: `${baseUrl}/footer-icons/youtube.svg`,
  link: ''
 },
 {
  img: `${baseUrl}/footer-icons/instagram.svg`,
  link: ''
 },
 {
  img: `${baseUrl}/footer-icons/facebook.svg`,
  link: ''
 },
 {
  img: `${baseUrl}/footer-icons/tiktok.svg`,
  link: ''
 },
]

export function Footer() {
    return(
     <Container>
      <div className="links">
       <section>
        <img className="Logo" src="/icon.svg" alt="Logo" />
        <p>
         Sua loja completa de celulares,<br/>
         eletrónicos e assistência técnica.<br/>
         Qualidade, confiança e tecnologia <br/>
         ao seu alcance.
        </p>

       <div className="icons">
         {IconsC.map((item ,index)=> (
         <a key={index} target="blank" href={item.link}>
          <img className="icon" src={item.img}/>
         </a>
        ))}
       </div>
       </section>

       <section>
        <h4>
         Institucional
        </h4>
        <ul>
        <li>Quem somos</li>
        <li>Politica de privacidade</li>
        <li>Trocas e devoluções</li>
        <li>Trabalhe conosco</li>
        <li>Fale conosco</li>
        </ul>
       </section>

       <section>
        <h4>
         Categorias
        </h4>
        <ul>
         <li>Celulares</li>
         <li>Eletrônicos</li>
         <li>Acessórios</li>
         <li>Audio</li>
         <li>Informática</li>
        </ul>
       </section>

       <section></section>


       <section>
        <h3>
         blank
        </h3>
        <ul>
         <li>Smartwatch</li>
         <li>Games</li>
         <li>Casa Inteligente</li>
         <li>Ofertas</li>
        </ul>
       </section>


        <section>
        <h4>
         Atendimento
        </h4>
        <ul>
        <li>
         <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.125 2.8125H1.875C1.75068 2.8125 1.63145 2.86189 1.54354 2.94979C1.45564 3.0377 1.40625 3.15693 1.40625 3.28125V11.25C1.40625 11.4986 1.50502 11.7371 1.68084 11.9129C1.85665 12.0887 2.09511 12.1875 2.34375 12.1875H12.6562C12.9049 12.1875 13.1433 12.0887 13.3192 11.9129C13.495 11.7371 13.5938 11.4986 13.5938 11.25V3.28125C13.5938 3.15693 13.5444 3.0377 13.4565 2.94979C13.3685 2.86189 13.2493 2.8125 13.125 2.8125ZM7.5 7.80176L3.08027 3.75H11.9197L7.5 7.80176ZM5.78379 7.5L2.34375 10.6529V4.34707L5.78379 7.5ZM6.47754 8.13574L7.18066 8.7832C7.26714 8.86259 7.38026 8.90664 7.49766 8.90664C7.61505 8.90664 7.72817 8.86259 7.81465 8.7832L8.51777 8.13574L11.9162 11.25H3.08027L6.47754 8.13574ZM9.21621 7.5L12.6562 4.34648V10.6535L9.21621 7.5Z" fill="#0352DE"/>
         </svg>
         contato@gmail.com
        </li>

        <li>
         <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4045 9.1284L9.64415 7.89148L9.63653 7.88797C9.49323 7.82668 9.3369 7.80208 9.1817 7.8164C9.0265 7.83073 8.87733 7.88352 8.74766 7.97C8.73239 7.98008 8.71772 7.99104 8.70372 8.00281L7.27754 9.21863C6.37403 8.77976 5.44122 7.85398 5.00235 6.96219L6.21993 5.51433C6.23165 5.49969 6.24278 5.48504 6.25333 5.46922C6.33795 5.3399 6.3893 5.19167 6.40279 5.03772C6.41628 4.88376 6.39151 4.72886 6.33067 4.5868V4.57976L5.09024 1.81473C5.00981 1.62914 4.87152 1.47454 4.69601 1.37401C4.5205 1.27347 4.31718 1.2324 4.11641 1.25691C3.32245 1.36139 2.59367 1.75131 2.06618 2.35384C1.53869 2.95638 1.24857 3.73033 1.25001 4.53113C1.25001 9.18348 5.03516 12.9686 9.6875 12.9686C10.4883 12.9701 11.2623 12.6799 11.8648 12.1525C12.4673 11.625 12.8572 10.8962 12.9617 10.1022C12.9863 9.90152 12.9453 9.69825 12.8449 9.52275C12.7444 9.34725 12.59 9.20892 12.4045 9.1284ZM9.6875 12.0311C7.69905 12.029 5.79265 11.2381 4.3866 9.83203C2.98055 8.42598 2.18968 6.51959 2.18751 4.53113C2.1853 3.95896 2.39144 3.40554 2.76743 2.97424C3.14342 2.54294 3.66354 2.26324 4.23067 2.18738C4.23044 2.18972 4.23044 2.19207 4.23067 2.19441L5.46114 4.94832L4.25001 6.39793C4.23771 6.41207 4.22655 6.42716 4.21661 6.44305C4.12843 6.57835 4.07671 6.73414 4.06644 6.89531C4.05617 7.05648 4.08772 7.21757 4.15801 7.36297C4.68887 8.44871 5.78282 9.53445 6.88028 10.0647C7.02674 10.1344 7.18877 10.1648 7.35052 10.1531C7.51227 10.1414 7.66822 10.0879 7.80313 9.99793C7.81817 9.98779 7.83265 9.97684 7.84649 9.96512L9.2709 8.74988L12.0248 9.98328C12.0248 9.98328 12.0295 9.98328 12.0313 9.98328C11.9563 10.5512 11.677 11.0724 11.2457 11.4493C10.8143 11.8262 10.2604 12.0331 9.6875 12.0311Z" fill="#0352DE"/>
         </svg>

         (81) 9 9999-9999
        </li>

        <li>
         <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 2.34375C6.38748 2.34375 5.29995 2.67365 4.37492 3.29173C3.44989 3.90982 2.72892 4.78832 2.30318 5.81616C1.87744 6.84399 1.76604 7.97499 1.98309 9.06613C2.20013 10.1573 2.73586 11.1596 3.52253 11.9462C4.3092 12.7329 5.31148 13.2686 6.40262 13.4857C7.49376 13.7027 8.62476 13.5913 9.6526 13.1656C10.6804 12.7398 11.5589 12.0189 12.177 11.0938C12.7951 10.1688 13.125 9.08127 13.125 7.96875C13.1233 6.47743 12.5301 5.04768 11.4756 3.99316C10.4211 2.93864 8.99132 2.34546 7.5 2.34375ZM7.5 12.6562C6.5729 12.6562 5.66662 12.3813 4.89577 11.8663C4.12491 11.3512 3.5241 10.6191 3.16932 9.76258C2.81453 8.90605 2.7217 7.96355 2.90257 7.05426C3.08344 6.14498 3.52988 5.30975 4.18544 4.65419C4.841 3.99863 5.67623 3.55219 6.58552 3.37132C7.4948 3.19045 8.4373 3.28328 9.29383 3.63806C10.1504 3.99285 10.8824 4.59366 11.3975 5.36451C11.9126 6.13537 12.1875 7.04165 12.1875 7.96875C12.1861 9.21152 11.6918 10.403 10.813 11.2818C9.93425 12.1605 8.74278 12.6549 7.5 12.6562ZM10.1754 5.29336C10.219 5.33689 10.2536 5.38859 10.2771 5.4455C10.3007 5.5024 10.3129 5.5634 10.3129 5.625C10.3129 5.6866 10.3007 5.7476 10.2771 5.8045C10.2536 5.86141 10.219 5.91311 10.1754 5.95664L7.83164 8.30039C7.78809 8.34394 7.73639 8.37849 7.67949 8.40206C7.62258 8.42563 7.56159 8.43776 7.5 8.43776C7.43841 8.43776 7.37742 8.42563 7.32052 8.40206C7.26362 8.37849 7.21191 8.34394 7.16836 8.30039C7.12481 8.25684 7.09026 8.20514 7.06669 8.14823C7.04312 8.09133 7.03099 8.03034 7.03099 7.96875C7.03099 7.90716 7.04312 7.84617 7.06669 7.78927C7.09026 7.73236 7.12481 7.68066 7.16836 7.63711L9.51211 5.29336C9.55565 5.24978 9.60734 5.2152 9.66425 5.19161C9.72115 5.16802 9.78215 5.15588 9.84375 5.15588C9.90535 5.15588 9.96635 5.16802 10.0233 5.19161C10.0802 5.2152 10.1319 5.24978 10.1754 5.29336ZM5.625 0.9375C5.625 0.81318 5.67439 0.693951 5.7623 0.606044C5.8502 0.518136 5.96943 0.46875 6.09375 0.46875H8.90625C9.03057 0.46875 9.1498 0.518136 9.23771 0.606044C9.32562 0.693951 9.375 0.81318 9.375 0.9375C9.375 1.06182 9.32562 1.18105 9.23771 1.26896C9.1498 1.35686 9.03057 1.40625 8.90625 1.40625H6.09375C5.96943 1.40625 5.8502 1.35686 5.7623 1.26896C5.67439 1.18105 5.625 1.06182 5.625 0.9375Z" fill="#0352DE"/>
         </svg>
         Seg a Sex - 08h às 18h <br/>
         Sab - 08h às 14h
        </li>
        </ul>
       </section>
      </div>

      <div className="line"></div>

      <small>
        2026 AC Store. Todos os direitos reservados.
      </small>
     </Container>
    )
}