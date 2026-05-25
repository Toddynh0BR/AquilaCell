import { useState, useEffect } from 'react'
import * as S from "./styles.js";

import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from "react-router";

import 'swiper/css';

import { Header } from '../../components/header';
import { SubHeader } from '../../components/subHeader';
import { Button } from '../../components/button/index';
import { MiniButton } from '../../components/miniButton';
import { Footer } from '../../components/footer';

const baseUrl =
  typeof window !== 'undefined'
    ? window.location.origin
    : ''

const products = [
  {
    id: 1,
    img: `${baseUrl}/products/iphone.svg`,
    nome: 'Iphone 17',
    preço: 'R$ 9.999,99',
    variacao: 'Titanium',
    credit: '10X de 999,99 sem juros',
    avaliations: 300
  },
  {
    id: 2,
    img: `${baseUrl}/products/ps5.svg`,
    nome: 'PlayStation 5',
    preço: 'R$ 4.799,99',
    variacao: 'Slim Digital',
    credit: '10X de 479,99 sem juros',
    avaliations: 45
  },
  {
    id: 3,
    img: `${baseUrl}/products/headset.svg`,
    nome: 'Headset Gamer',
    preço: 'R$ 599,99',
    variacao: 'RGB Wireless',
    credit: '10X de 59,99 sem juros',
    avaliations: 60
  },
  {
    id: 4,
    img: `${baseUrl}/products/sw.svg`,
    nome: 'Smartwatch Ultra',
    preço: 'R$ 1.299,99',
    variacao: 'Black Edition',
    credit: '10X de 129,99 sem juros',
    avaliations: 5
  },
  {
    id: 5,
    img: `${baseUrl}/products/jbl.svg`,
    nome: 'JBL Charge 6',
    preço: 'R$ 899,99',
    variacao: 'Bluetooth',
    credit: '10X de 89,99 sem juros',
    avaliations: 32
  },
 {
  id: 6,
  img: `${baseUrl}/products/pngwing.com.png`,
  nome: 'Notebook Gamer',
  preço: 'R$ 6.499,99',
  variacao: 'RTX 4060',
  credit: '10X de 649,99 sem juros',
  avaliations: 12
},
{
  id: 7,
  img: `${baseUrl}/products/pngwing.com (1).png`,
  nome: 'Mouse Gamer',
  preço: 'R$ 249,99',
  variacao: 'Wireless RGB',
  credit: '10X de 24,99 sem juros',
  avaliations: 121
},
{
  id: 8,
  img: `${baseUrl}/products/pngwing.com (2).png`,
  nome: 'Teclado Mecânico',
  preço: 'R$ 399,99',
  variacao: 'Switch Blue',
  credit: '10X de 39,99 sem juros',
  avaliations: 122
},
{
  id: 9,
  img: `${baseUrl}/products/pngwing.com (3).png`,
  nome: 'Monitor Gamer',
  preço: 'R$ 1.899,99',
  variacao: '240Hz Full HD',
  credit: '10X de 189,99 sem juros',
  avaliations: 40
},
{
  id: 10,
  img: `${baseUrl}/products/pngwing.com (4).png`,
  nome: 'AirPods Pro',
  preço: 'R$ 2.199,99',
  variacao: '2ª Geração',
  credit: '10X de 219,99 sem juros',
  avaliations: 110
},
{
  id: 11,
  img: `${baseUrl}/products/pngwing.com (5).png`,
  nome: 'iPad Pro',
  preço: 'R$ 8.499,99',
  variacao: 'M4 256GB',
  credit: '10X de 849,99 sem juros',
  avaliations: 80
},
{
  id: 12,
  img: `${baseUrl}/products/pngwing.com (6).png`,
  nome: 'Câmera Canon',
  preço: 'R$ 5.999,99',
  variacao: '4K DSLR',
  credit: '10X de 599,99 sem juros',
  avaliations: 60
},
{
  id: 13,
  img: `${baseUrl}/products/pngwing.com (7).png`,
  nome: 'Xbox Series X',
  preço: 'R$ 4.599,99',
  variacao: '1TB',
  credit: '10X de 459,99 sem juros',
  avaliations: 50
},
{
  id: 14,
  img: `${baseUrl}/products/pngwing.com (8).png`,
  nome: 'Tablet Samsung',
  preço: 'R$ 2.799,99',
  variacao: 'Galaxy Tab S9',
  credit: '10X de 279,99 sem juros',
  avaliations: 21
},
{
  id: 15,
  img: `${baseUrl}/products/pngwing.com (9).png`,
  nome: 'Drone 4K',
  preço: 'R$ 3.999,99',
  variacao: 'GPS Edition',
  credit: '10X de 399,99 sem juros',
  avaliations: 12
},
{
  id: 16,
  img: `${baseUrl}/products/pngwing.com (10).png`,
  nome: 'Smart TV LG',
  preço: 'R$ 3.499,99',
  variacao: '55 Polegadas 4K',
  credit: '10X de 349,99 sem juros',
  avaliations: 130
},
{
  id: 17,
  img: `${baseUrl}/products/pngwing.com (11).png`,
  nome: 'Caixa de Som JBL',
  preço: 'R$ 1.199,99',
  variacao: 'PartyBox Mini',
  credit: '10X de 119,99 sem juros',
  avaliations: 10
},
{
  id: 18,
  img: `${baseUrl}/products/Meta-Quest-3-PNG.png`,
  nome: 'Meta Quest 3',
  preço: 'R$ 4.299,99',
  variacao: '128GB VR',
  credit: '10X de 429,99 sem juros',
  avaliations: 120
},
{
  id: 19,
  img: `${baseUrl}/products/pngwing.com (12).png`,
  nome: 'MacBook Air',
  preço: 'R$ 11.499,99',
  variacao: 'M3 512GB',
  credit: '10X de 1.149,99 sem juros',
  avaliations: 120
},
{
  id: 20,
  img: `${baseUrl}/products/pngwing.com (13).png`,
  nome: 'Galaxy S26 Ultra',
  preço: 'R$ 7.999,99',
  variacao: '512GB Titanium',
  credit: '10X de 799,99 sem juros',
  avaliations: 120
}
]

export function Home() {
  const [windowW, setWidowW] = useState(window.innerWidth);
  const [SlidesN, setSlidesN] = useState(0);

  useEffect(()=> {
   if (window.innerWidth < 900) {
    setSlidesN(3)
   }
   if (window.innerWidth < 850) {
    setSlidesN(2.5)
   }
   if (window.innerWidth < 750) {
    setSlidesN(2)
   }
   if (window.innerWidth <= 500) {
    setSlidesN(1.5)
   }


   if (window.innerWidth > 1000) {
    setSlidesN(3.5)
   }
   if (window.innerWidth > 1100) {
    setSlidesN(4)
   }
   if (window.innerWidth > 1200) {
    setSlidesN(4.5)
   }
   if (window.innerWidth > 1450) {
    setSlidesN(5)
   }
   if (window.innerWidth > 1500) {
    setSlidesN(5.5)
   }
   if (window.innerWidth > 1600) {
    setSlidesN(6)
   }
   if (window.innerWidth > 1700) {
    setSlidesN(7)
   }
  }, [windowW]);

  window.addEventListener('resize', () => {
    console.log(`Novo tamanho: ${window.innerWidth}x${window.innerHeight}`);

    setWidowW(window.innerWidth);
  });

  return (
   <S.Container>
    <Header/>
    <SubHeader/>

    <S.Main>
     <div className="texts">
      <h2>
        TECNOLOGIA QUE CONECTA,
      </h2>
      <h1>
        QUALIDADE QUE <br />
        TRANSFORMA<strong>.</strong>
      </h1>
      <p>
       Smartphones, eletrônicos, acessórios e muito mais <br/>
       com os melhores preços e garantia.
      </p>

      <div className="icons">
        <div className="icon">
          <img src="/ICON1.png" alt="" />
          <span>
            Entrega rápida<br />
           <p>
            direto na sua casa
           </p>
          </span>
        </div>

        <div className="icon">
          <img src="/ICON2.png" alt="" />
          <span>
            Garantia de até<br />
           <p>
            6 meses
           </p>
          </span>
        </div>

        <div className="icon">
          <img src="/ICON3.png" alt="" />
          <span>
            Parcele em até<br />
           <p>
            12x sem juros
           </p>
          </span>
        </div>
      </div>

      <Button text="VER PRODUTOS" />

     </div>
     <img src="/MainImage.png" alt="" id='MainImage'/>
    </S.Main>

    <S.BigImage>
     <main>
      <img src="Image1.svg" alt="" id='Image'/>
      <div className="part1">
        <h2>
          Seu aparelho em <br/> boas mãos
        </h2>

        <p>
          Consertamos celulares, tablets e diversos <br/> eletrônicos com agilidade e segurança
        </p>

        <ul>
         <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
<path d="M9.16659 4.61665V4.99998C9.16607 5.89849 8.87513 6.77277 8.33714 7.49241C7.79916 8.21206 7.04295 8.73852 6.18132 8.99328C5.31968 9.24803 4.39878 9.21744 3.55595 8.90606C2.71312 8.59468 1.99352 8.01919 1.50449 7.26543C1.01545 6.51166 0.783165 5.62001 0.842284 4.72345C0.901403 3.82689 1.24875 2.97345 1.83254 2.29043C2.41632 1.60741 3.20525 1.13139 4.08166 0.933378C4.95808 0.735363 5.87503 0.825958 6.69575 1.19165M9.16659 1.66665L4.99992 5.83748L3.74992 4.58748" stroke="#005AE5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Técnico especializado
         </li>

         <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
<path d="M9.16659 4.61665V4.99998C9.16607 5.89849 8.87513 6.77277 8.33714 7.49241C7.79916 8.21206 7.04295 8.73852 6.18132 8.99328C5.31968 9.24803 4.39878 9.21744 3.55595 8.90606C2.71312 8.59468 1.99352 8.01919 1.50449 7.26543C1.01545 6.51166 0.783165 5.62001 0.842284 4.72345C0.901403 3.82689 1.24875 2.97345 1.83254 2.29043C2.41632 1.60741 3.20525 1.13139 4.08166 0.933378C4.95808 0.735363 5.87503 0.825958 6.69575 1.19165M9.16659 1.66665L4.99992 5.83748L3.74992 4.58748" stroke="#005AE5" stroke-linecap="round" stroke-linejoin="round"/> 
          </svg>
          Peças de qualidade
         </li>

         <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
           <path d="M9.16659 4.61665V4.99998C9.16607 5.89849 8.87513 6.77277 8.33714 7.49241C7.79916 8.21206 7.04295 8.73852 6.18132 8.99328C5.31968 9.24803 4.39878 9.21744 3.55595 8.90606C2.71312 8.59468 1.99352 8.01919 1.50449 7.26543C1.01545 6.51166 0.783165 5.62001 0.842284 4.72345C0.901403 3.82689 1.24875 2.97345 1.83254 2.29043C2.41632 1.60741 3.20525 1.13139 4.08166 0.933378C4.95808 0.735363 5.87503 0.825958 6.69575 1.19165M9.16659 1.66665L4.99992 5.83748L3.74992 4.58748" stroke="#005AE5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Garantia do serviço
         </li>
        </ul>

        <Button text='SOLICITAR ORÇAMENTO'/>
      </div>

      <div className="part2">
       <div className="icons">
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16.0001 24H16.0134M9.33341 2.66669H22.6667C24.1395 2.66669 25.3334 3.86059 25.3334 5.33335V26.6667C25.3334 28.1394 24.1395 29.3334 22.6667 29.3334H9.33341C7.86066 29.3334 6.66675 28.1394 6.66675 26.6667V5.33335C6.66675 3.86059 7.86066 2.66669 9.33341 2.66669Z" stroke="#005AE5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          <span>
           Troca de Tela<br />
           <p>
            Smartphones e tablets
           </p>
          </span>
        </div>

        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<g clip-path="url(#clip0_11_774)">
<path d="M6.66659 24H3.99992C3.29267 24 2.6144 23.719 2.1143 23.219C1.6142 22.7189 1.33325 22.0406 1.33325 21.3333V10.6667C1.33325 9.95942 1.6142 9.28115 2.1143 8.78105C2.6144 8.28095 3.29267 8 3.99992 8H8.25325M19.9999 8H22.6666C23.3738 8 24.0521 8.28095 24.5522 8.78105C25.0523 9.28115 25.3333 9.95942 25.3333 10.6667V21.3333C25.3333 22.0406 25.0523 22.7189 24.5522 23.219C24.0521 23.719 23.3738 24 22.6666 24H18.4133M30.6666 17.3333V14.6667M14.6666 8L9.33325 16H17.3333L11.9999 24" stroke="#005AE5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11_774">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
          </svg>
          <span>
            Troca de Bateria<br />
           <p>
            Mais duração
           </p>
          </span>
        </div>

        <div className="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0ZM7 16C7.19778 16 7.39112 16.0586 7.55557 16.1685C7.72002 16.2784 7.84819 16.4346 7.92388 16.6173C7.99957 16.8 8.01937 17.0011 7.98079 17.1951C7.9422 17.3891 7.84696 17.5673 7.70711 17.7071C7.56725 17.847 7.38907 17.9422 7.19509 17.9808C7.00111 18.0194 6.80004 17.9996 6.61732 17.9239C6.43459 17.8482 6.27841 17.72 6.16853 17.5556C6.05865 17.3911 6 17.1978 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16ZM2 2H6V14.1725C5.33279 14.4084 4.77045 14.8726 4.41237 15.483C4.05429 16.0934 3.92353 16.8107 4.0432 17.5082C4.16288 18.2057 4.52527 18.8385 5.06634 19.2946C5.60741 19.7507 6.29231 20.0009 7 20.0009C7.70769 20.0009 8.39259 19.7507 8.93366 19.2946C9.47473 18.8385 9.83712 18.2057 9.9568 17.5082C10.0765 16.8107 9.94571 16.0934 9.58763 15.483C9.22955 14.8726 8.66721 14.4084 8 14.1725V10.4137L14 16.4137V22H2V2ZM22 22H16V16C16.0001 15.8686 15.9743 15.7385 15.9241 15.6171C15.8739 15.4958 15.8003 15.3854 15.7075 15.2925L8 7.58625V2H12V5C11.9999 5.13136 12.0257 5.26145 12.0759 5.38285C12.1261 5.50424 12.1997 5.61456 12.2925 5.7075L14.2925 7.7075C14.0988 8.11078 13.9988 8.55263 14 9C14 9.59334 14.1759 10.1734 14.5056 10.6667C14.8352 11.1601 15.3038 11.5446 15.8519 11.7716C16.4001 11.9987 17.0033 12.0581 17.5853 11.9424C18.1672 11.8266 18.7018 11.5409 19.1213 11.1213C19.5409 10.7018 19.8266 10.1672 19.9424 9.58527C20.0581 9.00333 19.9987 8.40013 19.7716 7.85195C19.5446 7.30377 19.1601 6.83524 18.6667 6.50559C18.1734 6.17595 17.5933 6 17 6C16.5525 5.99922 16.1107 6.09964 15.7075 6.29375L14 4.58625V2H22V22ZM17 8C17.1978 8 17.3911 8.05865 17.5556 8.16853C17.72 8.27841 17.8482 8.43459 17.9239 8.61732C17.9996 8.80004 18.0194 9.00111 17.9808 9.19509C17.9422 9.38907 17.847 9.56725 17.7071 9.70711C17.5673 9.84696 17.3891 9.9422 17.1951 9.98079C17.0011 10.0194 16.8 9.99957 16.6173 9.92388C16.4346 9.84819 16.2784 9.72002 16.1685 9.55557C16.0586 9.39112 16 9.19778 16 9C16 8.73478 16.1054 8.48043 16.2929 8.29289C16.4804 8.10536 16.7348 8 17 8Z" fill="#005AE5"/>
          </svg>

          <span>
           Reparo de Placa<br />
           <p>
           Solução avançada
           </p>
          </span>
        </div>

        <div className="icon">
         <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0002 27.0032C17.0002 27.2684 16.8948 27.5228 16.7073 27.7103C16.5197 27.8978 16.2654 28.0032 16.0002 28.0032H6.00016C5.73495 28.0032 5.48059 27.8978 5.29306 27.7103C5.10552 27.5228 5.00016 27.2684 5.00016 27.0032C5.00016 26.738 5.10552 26.4836 5.29306 26.2961C5.48059 26.1085 5.73495 26.0032 6.00016 26.0032H16.0002C16.2654 26.0032 16.5197 26.1085 16.7073 26.2961C16.8948 26.4836 17.0002 26.738 17.0002 27.0032ZM22.0002 11.0032C22.0045 12.6702 21.6279 14.3162 20.8991 15.8156C20.1704 17.3149 19.1087 18.6279 17.7952 19.6544C17.5496 19.8427 17.3502 20.0846 17.2125 20.3617C17.0747 20.6388 17.0021 20.9437 17.0002 21.2532V22.0032C17.0002 22.5336 16.7894 23.0423 16.4144 23.4174C16.0393 23.7925 15.5306 24.0032 15.0002 24.0032H7.00016C6.46973 24.0032 5.96102 23.7925 5.58595 23.4174C5.21088 23.0423 5.00016 22.5336 5.00016 22.0032V21.2532C4.99996 20.9474 4.92965 20.6458 4.79465 20.3715C4.65965 20.0971 4.46355 19.8574 4.22141 19.6707C2.91116 18.6503 1.85022 17.3451 1.11889 15.8541C0.387552 14.363 0.00499221 12.7252 0.000163562 11.0644C-0.0323364 5.10694 4.78266 0.145693 10.7352 0.00319273C12.2018 -0.0321514 13.6608 0.226259 15.0261 0.763215C16.3914 1.30017 17.6355 2.10482 18.6852 3.12981C19.7349 4.15479 20.5689 5.3794 21.1382 6.73155C21.7075 8.08371 22.0006 9.53608 22.0002 11.0032ZM20.0002 11.0032C20.0005 9.80277 19.7607 8.61441 19.2949 7.50805C18.8291 6.4017 18.1466 5.39972 17.2877 4.56108C16.4288 3.72245 15.4108 3.06411 14.2936 2.62483C13.1765 2.18554 11.9827 1.97418 10.7827 2.00319C5.90766 2.11819 1.97391 6.17694 2.00016 11.0519C2.00473 12.4102 2.31816 13.7496 2.91673 14.9688C3.5153 16.188 4.38334 17.2552 5.45516 18.0894C5.93697 18.464 6.32668 18.9438 6.59448 19.4922C6.86227 20.0406 7.00104 20.6429 7.00016 21.2532V22.0032H15.0002V21.2532C15.0016 20.6412 15.1427 20.0376 15.4128 19.4884C15.683 18.9393 16.075 18.4591 16.5589 18.0844C17.634 17.2442 18.503 16.1695 19.0994 14.9422C19.6958 13.715 20.0039 12.3677 20.0002 11.0032ZM17.9864 9.83569C17.7271 8.38731 17.0303 7.05315 15.9897 6.01282C14.9492 4.97248 13.6149 4.27593 12.1664 4.01694C12.0369 3.99511 11.9043 3.999 11.7763 4.0284C11.6483 4.05779 11.5274 4.11211 11.4203 4.18825C11.3133 4.2644 11.2223 4.36087 11.1526 4.47218C11.0829 4.58348 11.0357 4.70743 11.0139 4.83694C10.9921 4.96646 10.996 5.09901 11.0254 5.22702C11.0548 5.35503 11.1091 5.476 11.1852 5.58302C11.2614 5.69004 11.3578 5.78101 11.4691 5.85075C11.5804 5.92048 11.7044 5.96761 11.8339 5.98944C13.9052 6.33819 15.6627 8.09569 16.0139 10.1707C16.0535 10.4036 16.1742 10.615 16.3548 10.7674C16.5353 10.9197 16.7639 11.0033 17.0002 11.0032C17.0567 11.0029 17.1131 10.9983 17.1689 10.9894C17.4303 10.9448 17.6633 10.7982 17.8166 10.5818C17.9699 10.3655 18.031 10.0971 17.9864 9.83569Z" fill="#005AE5"/>
         </svg>

          <span>
           Outros serviços<br />
           <p>
           Consulte-me
           </p>
          </span>
        </div>
      </div>

      <img src="/whatsappBar.svg" alt="" />
      </div>
     </main>
    </S.BigImage>

    <S.Products>
      <h3>DESTAQUES</h3>
      <h2>Os mais vendidos</h2>

     
       <div className="products">
        <Swiper  
        style={{overflow: 'visible'}}
        loop={true}
        spaceBetween={15}
        slidesPerView={SlidesN}>
        {products.map((item)=> (
         <SwiperSlide >
          <div className="product">
            <img src={item.img} alt="" />

            <p>
             {item.nome} <br/>
             <strong>{item.variacao}</strong>
            </p>

            <div className="stars">
              {new Array(5).fill(0).map((index)=> (
<svg key={index} width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_142)">
<path d="M9.15193 4.48637L7.39412 6.00317L7.92966 8.27153C7.95921 8.39467 7.9516 8.5238 7.9078 8.64262C7.86399 8.76143 7.78595 8.8646 7.68354 8.93909C7.58113 9.01358 7.45895 9.05604 7.33241 9.06112C7.20588 9.0662 7.08068 9.03366 6.97263 8.96762L4.99998 7.75356L3.02615 8.96762C2.91811 9.03328 2.79306 9.06551 2.66675 9.06024C2.54043 9.05498 2.4185 9.01246 2.3163 8.93803C2.21411 8.86361 2.13622 8.76061 2.09244 8.64201C2.04866 8.52341 2.04095 8.3945 2.07029 8.27153L2.60779 6.00317L0.849976 4.48637C0.754389 4.40376 0.685259 4.29482 0.651219 4.17315C0.617179 4.05148 0.619737 3.92248 0.658575 3.80226C0.697413 3.68204 0.770809 3.57592 0.869596 3.49716C0.968384 3.4184 1.08818 3.3705 1.21404 3.35942L3.51873 3.17348L4.40779 1.02192C4.45591 0.90466 4.53782 0.804359 4.64309 0.733769C4.74836 0.663179 4.87225 0.625488 4.999 0.625488C5.12575 0.625488 5.24964 0.663179 5.35491 0.733769C5.46018 0.804359 5.54209 0.90466 5.59021 1.02192L6.47888 3.17348L8.78357 3.35942C8.90967 3.37008 9.02982 3.41772 9.12897 3.49637C9.22812 3.57502 9.30185 3.68118 9.34093 3.80155C9.38001 3.92192 9.3827 4.05114 9.34866 4.17303C9.31462 4.29492 9.24537 4.40406 9.14958 4.48676L9.15193 4.48637Z" fill="#D8A207"/>
</g>
<defs>
<clipPath id="clip0_15_142">
<rect width="10" height="10" fill="white"/>
</clipPath>
</defs>
</svg>

              ))}
              <span>({item.avaliations})</span>
            </div>

            <div className="buy">
             <h4>
              {item.preço} <br/>
              <h5>{item.credit}</h5>
             </h4>

             <MiniButton/>
            </div>
          </div>
         </SwiperSlide>  
        ))}
       </Swiper>
       </div>
     
    </S.Products>

    <S.ImageBar>
      <img src={window.innerWidth > 750 ? `${baseUrl}/Bar.svg` : `${baseUrl}/BarMobile.svg`} alt="" />
    </S.ImageBar>

    <Footer/>
   </S.Container>
  )
}

