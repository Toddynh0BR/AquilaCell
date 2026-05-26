import * as S from "./styles";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useParams, Link, useNavigate } from 'react-router';
import { useState, useEffect } from "react";

import { Header } from "../../components/header";
import { MiniButton } from '../../components/miniButton';
import { Footer } from "../../components/footer";

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

export function Product() {
    const { navigate } = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState(null);

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
       if (window.innerWidth > 1350) {
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

    useEffect(()=> {
     if (!id) return navigate(-1);

     const TheProduct = products.find((item)=> item.id == id);

     if (!TheProduct) return navigate(-1);

     setProduct(TheProduct);
     window.scrollTo({
        top: 0,
        behavior: 'smooth'
     })
    }, [id]);

    if (!product) return <p>Carregando...</p>
    return(
     <S.Container>
      <Header/>

      <S.Main>
       <Link to={-1} className="Return">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1632 15.5867C13.3393 15.7628 13.4383 16.0017 13.4383 16.2508C13.4383 16.4999 13.3393 16.7387 13.1632 16.9148C12.9871 17.091 12.7482 17.1899 12.4991 17.1899C12.2501 17.1899 12.0112 17.091 11.8351 16.9148L5.58507 10.6648C5.49767 10.5778 5.42832 10.4743 5.381 10.3603C5.33368 10.2463 5.30933 10.1242 5.30933 10.0008C5.30933 9.8774 5.33368 9.75522 5.381 9.64127C5.42832 9.52731 5.49767 9.42382 5.58507 9.33672L11.8351 3.08672C12.0112 2.9106 12.2501 2.81166 12.4991 2.81166C12.7482 2.81166 12.9871 2.9106 13.1632 3.08672C13.3393 3.26284 13.4383 3.50172 13.4383 3.75079C13.4383 3.99986 13.3393 4.23873 13.1632 4.41485L7.57803 10L13.1632 15.5867Z" fill="#005AE5"/>
        </svg>

        <span>Voltar</span>
       </Link>

       <div className="product">
        <div className="IMGs">
         <div className="columnImages">
          <div className="img">
            <img src={product.img} alt="" />
          </div>
          <div className="img">
            <img src={product.img} alt="" />
          </div>
          <div className="img">
            <img src={product.img} alt="" />
          </div>
         </div>

         <div className="IMAGE">
          <img src={product.img} alt="" />
         </div>
        </div>

        <div className="Info">
         <h4>
          {product.nome}
         </h4>

         <h2>
          {product.nome} - {product.variacao}
         </h2>

         <div className="stars">
              {new Array(5).fill(0).map((index)=> (
<svg key={index} width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span>({product.avaliations})</span>
         </div>

         <h1>
         {product.preço}
         <strong>ou {product.credit}</strong>
         </h1>

         <h3>VARIAÇÃO</h3>
         <div className="variations">
          <div className="variation">
            128GB
          </div>

          <div className="variation">
            256GB
          </div>

          <div className="variation">
            512GB
          </div>
         </div>

         <h3>COR</h3>
         <div className="colors">
          <div className="color">
           <div></div>
          </div>

          <div className="color">
           <div></div>
          </div>

          <div className="color">
            <div></div>
          </div>
         </div>

         <button>Compre agora</button>
         <button>Adicionar ao carrinho</button>

         <h3>Frete grátis de 2 dias e devoluções</h3>
        </div>
       </div>

       <div className="reviews">
        <img src={window.innerWidth > 900 ? "/Reviews.svg" : '/reviews-mobile.svg'} alt="" />
       </div>
      
       { window.innerWidth > 900 && <img width={'100%'} content="contain" src="/product-banner.svg" alt="" />}

       { window.innerWidth > 900 && 
        <h5>
        Especificações Técnicas
        </h5>
       }

       { window.innerWidth > 900 && <img width={'100%'} content="contain" src="/product-banner-2.svg" alt="" />}
      </S.Main>

      <S.Products >
            <h3>DESTAQUES</h3>
            <h2>Os mais vendidos</h2>
      
           
             <div className="products">
              <Swiper  
              style={{overflow: 'visible'}}
              loop={true}
              spaceBetween={15}
              slidesPerView={SlidesN}>
              {products.map((item, index)=> (
                <SwiperSlide key={index}>
                <Link to={`/product/${item.id}`} >
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
                </Link>
                </SwiperSlide>
              ))}
             </Swiper>
             </div>
           
      </S.Products>

      <Footer/>
     </S.Container>
    )
}