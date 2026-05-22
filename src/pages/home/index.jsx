import { useState } from 'react'
import "./styles.css";

import { NavLink } from "react-router";

export function Home() {

  return (
<>
  <header>
    <div class="container top-header">

      <div class="logo">
        <img src="" alt=""/>
      </div>

      <div class="search-area">
        <input type="text" placeholder="Oque você procura?"/>
        <button class="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <button class="quote-btn">
        SOLICITAR ORÇAMENTO
        <i class="fa-solid fa-arrow-right"></i>
      </button>

    </div>

    <nav>
      <div class="container">

        <div class="nav-item">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <span>Celulares</span>
        </div>

        <div class="nav-item">
          <i class="fa-solid fa-tv"></i>
          <span>Eletrônicos</span>
        </div>

        <div class="nav-item">
          <i class="fa-solid fa-computer-mouse"></i>
          <span>Acessórios</span>
        </div>

        <div class="nav-item">
          <i class="fa-solid fa-headphones"></i>
          <span>Áudio</span>
        </div>

        <div class="nav-item">
          <i class="fa-solid fa-clock"></i>
          <span>Smartwatch</span>
        </div>

        <div class="nav-item">
          <i class="fa-solid fa-gamepad"></i>
          <span>Games</span>
        </div>

        <div class="nav-item">
          <i class="fa-solid fa-laptop"></i>
          <span>Informática</span>
        </div>

      </div>
    </nav>
  </header>


  <section class="hero">
    <div class="container hero-content">

      <div class="hero-left">

        <p class="hero-tag">
          TECNOLOGIA QUE CONECTA,
        </p>

        <h1 class="hero-title">
          QUALIDADE QUE <br/>
          TRANSFORMA<span>.</span>
        </h1>

        <p class="hero-description">
          Smartphones, eletrônicos, acessórios e muito mais
          com os melhores preços e garantia.
        </p>

        <div class="hero-benefits">

          <div class="benefit">
            <i class="fa-solid fa-truck-fast"></i>

            <span>
              Entrega rápida <br/>
              direto na sua casa
            </span>
          </div>

          <div class="benefit">
            <i class="fa-solid fa-shield"></i>

            <span>
              Garantia de até <br/>
              6 meses
            </span>
          </div>

          <div class="benefit">
            <i class="fa-solid fa-credit-card"></i>

            <span>
              Parcele em até <br/>
              12x sem juros
            </span>
          </div>

        </div>

        <button class="primary-btn">
          VER PRODUTOS
          <i class="fa-solid fa-arrow-right"></i>
        </button>

      </div>

      <div class="hero-right">
        <img src="" alt=""/>
      </div>

    </div>
  </section>


  <section class="service">
    <div class="container">

      <div class="service-box">

        <div class="service-image">
          <img src="" alt=""/>
        </div>

        <div class="service-content">

          <div class="service-main">

            <p class="service-tag">
              ASSISTÊNCIA TÉCNICA ESPECIALIZADA
            </p>

            <h2 class="service-title">
              Seu aparelho em <br/>
              boas mãos
            </h2>

            <p class="service-desc">
              Consertamos celulares, tablets e diversos
              eletrônicos com agilidade e segurança
            </p>

            <div class="service-list">

              <div>
                <i class="fa-solid fa-circle-check"></i>
                Técnico especializado
              </div>

              <div>
                <i class="fa-solid fa-circle-check"></i>
                Peças de qualidade
              </div>

              <div>
                <i class="fa-solid fa-circle-check"></i>
                Garantia do serviço
              </div>

            </div>

            <button class="primary-btn">
              SOLICITAR ORÇAMENTO
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

          <div class="service-side">

            <div>

              <div class="repair-item">
                <i class="fa-solid fa-mobile-screen"></i>

                <div>
                  <h4>Troca de Tela</h4>
                  <p>Smartphones e tablets</p>
                </div>
              </div>

              <div class="repair-item">
                <i class="fa-solid fa-bolt"></i>

                <div>
                  <h4>Troca de Bateria</h4>
                  <p>Mais duração</p>
                </div>
              </div>

              <div class="repair-item">
                <i class="fa-solid fa-microchip"></i>

                <div>
                  <h4>Reparo de Placa</h4>
                  <p>Solução avançada</p>
                </div>
              </div>

              <div class="repair-item">
                <i class="fa-regular fa-lightbulb"></i>

                <div>
                  <h4>Outros serviços</h4>
                  <p>Consulte-me</p>
                </div>
              </div>

            </div>

            <div class="whatsapp-box">

              <i class="fa-brands fa-whatsapp"></i>

              <div>
                <span>Atendimento rápido via WhatsApp</span>
                <h4>(81) 9 9999-9999</h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>


  <section class="products">
    <div class="container">

      <p class="section-tag">
        DESTAQUES
      </p>

      <h2 class="section-title">
        Os mais vendidos
      </h2>

      <div class="products-grid">

      
<NavLink to="/product" end>
        <div class="product-card">

          <div class="product-image">
            <img src="" alt=""/>
          </div>

          <h3 class="product-name">
            Nome do Produto
          </h3>

          <p class="product-variant">
            Variação do produto
          </p>

          <div class="stars">
            ★★★★★ (129)
          </div>

          <div class="card-bottom">

            <div>
              <h4 class="price">
                R$ 9.999,99
              </h4>

              <p class="installment">
                10x de 999,99 sem juros
              </p>
            </div>

            <button class="cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>
</NavLink>
   

        <div class="product-card">

          <div class="product-image">
            <img src="" alt=""/>
          </div>

          <h3 class="product-name">
            Nome do Produto
          </h3>

          <p class="product-variant">
            Variação do produto
          </p>

          <div class="stars">
            ★★★★★ (129)
          </div>

          <div class="card-bottom">

            <div>
              <h4 class="price">
                R$ 9.999,99
              </h4>

              <p class="installment">
                10x de 999,99 sem juros
              </p>
            </div>

            <button class="cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>

 

        <div class="product-card">

          <div class="product-image">
            <img src="" alt=""/>
          </div>

          <h3 class="product-name">
            Nome do Produto
          </h3>

          <p class="product-variant">
            Variação do produto
          </p>

          <div class="stars">
            ★★★★★ (129)
          </div>

          <div class="card-bottom">

            <div>
              <h4 class="price">
                R$ 9.999,99
              </h4>

              <p class="installment">
                10x de 999,99 sem juros
              </p>
            </div>

            <button class="cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>


        <div class="product-card">

          <div class="product-image">
            <img src="" alt=""/>
          </div>

          <h3 class="product-name">
            Nome do Produto
          </h3>

          <p class="product-variant">
            Variação do produto
          </p>

          <div class="stars">
            ★★★★★ (129)
          </div>

          <div class="card-bottom">

            <div>
              <h4 class="price">
                R$ 9.999,99
              </h4>

              <p class="installment">
                10x de 999,99 sem juros
              </p>
            </div>

            <button class="cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>


        <div class="product-card">

          <div class="product-image">
            <img src="" alt=""/>
          </div>

          <h3 class="product-name">
            Nome do Produto
          </h3>

          <p class="product-variant">
            Variação do produto
          </p>

          <div class="stars">
            ★★★★★ (129)
          </div>

          <div class="card-bottom">

            <div>
              <h4 class="price">
                R$ 9.999,99
              </h4>

              <p class="installment">
                10x de 999,99 sem juros
              </p>
            </div>

            <button class="cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>

      </div>

    </div>
  </section>

  <section class="benefits-section">
    <div class="container">

      <div class="benefits-wrapper">

        <div class="benefit-box">
          <i class="fa-solid fa-shield"></i>

          <div>
            <h4>Compra 100% segura</h4>
            <p>Ambiente protegido</p>
          </div>
        </div>

        <div class="benefit-box">
          <i class="fa-solid fa-credit-card"></i>

          <div>
            <h4>Parcele em até 12x</h4>
            <p>No cartão de crédito</p>
          </div>
        </div>

        <div class="benefit-box">
          <i class="fa-solid fa-gem"></i>

          <div>
            <h4>5% de desconto no PIX</h4>
            <p>Pagamento à vista</p>
          </div>
        </div>

        <div class="benefit-box">
          <i class="fa-solid fa-headset"></i>

          <div>
            <h4>Suporte especializado</h4>
            <p>Atendimento humanizado</p>
          </div>
        </div>

      </div>

    </div>
  </section>



  <footer>
    <div class="container">

      <div class="footer-content">

        <div>

          <div class="footer-logo">
            <img src="" alt=""/>
          </div>

          <p class="footer-text">
            Sua loja completa de celulares,
            eletrônicos e assistência técnica.
            Qualidade, confiança e tecnologia
            ao seu alcance.
          </p>

          <div class="socials">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-tiktok"></i>
          </div>

        </div>

        <div class="footer-column">

          <h4>Institucional</h4>

          <a href="#">Quem somos</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Fale conosco</a>

        </div>

        <div class="footer-column">

          <h4>Categorias</h4>

          <a href="#">Celulares</a>
          <a href="#">Eletrônicos</a>
          <a href="#">Acessórios</a>
          <a href="#">Áudio</a>
          <a href="#">Informática</a>

        </div>

        <div class="footer-column">

          <h4>Atendimento</h4>

          <a href="#">contato@gmail.com</a>
          <a href="#">(81) 9 9999-9999</a>
          <a href="#">Seg à Sex - 08h às 18h</a>
          <a href="#">Sab - 08h às 14h</a>

        </div>

      </div>

      <div class="footer-bottom">
        2026 AC Store. Todos os direitos reservados.
      </div>

    </div>
  </footer>

</>
  )
}

