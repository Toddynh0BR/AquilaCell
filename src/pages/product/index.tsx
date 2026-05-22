import "./styles.css"

export function Product() {
 return (
<>
  <header>

    <div className="container top-header">

      <div className="logo">
        <img src="" alt=""/>
      </div>

      <div className="search-area">

        <input type="text" placeholder="Oque você procura?"/>

        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

      </div>

      <button className="quote-btn">
        SOLICITAR ORÇAMENTO
        <i className="fa-solid fa-arrow-right"></i>
      </button>

    </div>

    <nav>

      <div className="container">

        <div className="nav-item">
          <i className="fa-solid fa-mobile-screen-button"></i>
          Celulares
        </div>

        <div className="nav-item">
          <i className="fa-solid fa-tv"></i>
          Eletrônicos
        </div>

        <div className="nav-item">
          <i className="fa-solid fa-computer-mouse"></i>
          Acessórios
        </div>

        <div className="nav-item">
          <i className="fa-solid fa-headphones"></i>
          Áudio
        </div>

        <div className="nav-item">
          <i className="fa-solid fa-clock"></i>
          Smartwatch
        </div>

        <div className="nav-item">
          <i className="fa-solid fa-gamepad"></i>
          Games
        </div>

        <div className="nav-item">
          <i className="fa-solid fa-laptop"></i>
          Informática
        </div>

      </div>

    </nav>

  </header>


  <section className="product-section">

    <div className="container">

      <div className="product-wrapper">

        <div className="gallery">

          <div className="thumb">
            <img src="" alt=""/>
          </div>

          <div className="thumb">
            <img src="" alt=""/>
          </div>

          <div className="thumb">
            <img src="" alt=""/>
          </div>

        </div>

        <div className="main-image">
          <img src="" alt=""/>
        </div>

        <div className="product-info">

          <p className="product-tag">
            AETHER FLAGSHIP
          </p>

          <h1 className="product-title">
            AETHER X1 - Titanium Gray
          </h1>

          <div className="rating">

            <div className="rating-stars">
              ★★★★★
            </div>

            <div className="rating-text">
              4.9/5 (2.4k avaliações)
            </div>

          </div>

          <div className="price-wrapper">

            <h2 className="price">
              R$1.459,99
            </h2>

            <span className="installments">
              ou R$62,99 em 24x
            </span>

          </div>

          <p className="option-title">
            CAPACIDADE DE ARMAZARMANENTO
          </p>

          <div className="storage-options">

            <button className="storage-btn">
              128GB
            </button>

            <button className="storage-btn active">
              256GB
            </button>

            <button className="storage-btn">
              512GB
            </button>

          </div>

          <p className="option-title">
            FINISH
          </p>

          <div className="colors">

            <div className="color gray"></div>
            <div className="color black"></div>
            <div className="color white"></div>

          </div>

          <button className="buy-btn buy-now">
            Compre agora
          </button>

          <button className="buy-btn cart">
            Adicionar no carrinho
          </button>

          <div className="shipping">
            <i className="fa-solid fa-truck-fast"></i>
            Frete grátis de 2 dias e devoluções
          </div>

        </div>

      </div>

    </div>

  </section>


  <section className="reviews">

    <div className="container">

      <div className="reviews-wrapper">

        <div>

          <h2 className="reviews-title">
            Avaliações
          </h2>

          <div className="score">

            <div className="score-number">
              4.9
            </div>

            <div className="score-info">

              <h4>★★★★★</h4>

              <p>
                Baseado em 2.400 avaliações
              </p>

            </div>

          </div>

          <div className="bars">

            <div className="bar">
              <span>5</span>

              <div className="line">
                <div style={{width:'92%'}}></div>
              </div>

              <span>92%</span>
            </div>

            <div className="bar">
              <span>4</span>

              <div className="line">
                <div style={{width:'6%'}}></div>
              </div>

              <span>6%</span>
            </div>

            <div className="bar">
              <span>3</span>

              <div className="line">
                <div style={{width:'1%'}}></div>
              </div>

              <span>1%</span>
            </div>

          </div>

          <button className="review-btn">
            Escreva uma avaliação
          </button>

        </div>

        <div className="review-list">

          <div className="review-item">

            <div className="review-top">

              <div>

                <h3>
                  Qualidade de Construção Incrível
                </h3>

                <div className="review-stars">
                  ★★★★★
                </div>

              </div>

              <span className="review-date">
                2 days ago
              </span>

            </div>

            <p className="review-text">
              A estrutura de titânio é incrível ao toque.
              É visivelmente mais leve que a geração anterior,
              mas parece ainda mais robusta. A tela é a melhor
              que já vi em um dispositivo móvel.
            </p>

            <p className="review-user">
              Marcus V. — Compra Verificada
            </p>

          </div>

          <div className="review-item">

            <div className="review-top">

              <div>

                <h3>
                  A Câmera é um Divisor de Águas
                </h3>

                <div className="review-stars">
                  ★★★★★
                </div>

              </div>

              <span className="review-date">
                1 week ago
              </span>

            </div>

            <p className="review-text">
              Como fotógrafo profissional, estou impressionado
              com as capacidades 8K ProRes. O desempenho com
              pouca luz está anos à frente de qualquer outra
              coisa no mercado.
            </p>

            <p className="review-user">
              Elena S. — Compra Verificada
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

  <section className="benefits">

    <div className="container">

      <div className="benefits-wrapper">

        <div className="benefit">

          <i className="fa-solid fa-shield"></i>

          <div>
            <h4>Compra 100% segura</h4>
            <p>Ambiente protegido</p>
          </div>

        </div>

        <div className="benefit">

          <i className="fa-solid fa-credit-card"></i>

          <div>
            <h4>Parcele em até 12x</h4>
            <p>No cartão de crédito</p>
          </div>

        </div>

        <div className="benefit">

          <i className="fa-solid fa-gem"></i>

          <div>
            <h4>5% de desconto no PIX</h4>
            <p>Pagamento à vista</p>
          </div>

        </div>

        <div className="benefit">

          <i className="fa-solid fa-headset"></i>

          <div>
            <h4>Suporte especializado</h4>
            <p>Atendimento humanizado</p>
          </div>

        </div>

      </div>

    </div>

  </section>

  <section className="specs">

    <div className="container">

      <h2 className="section-title">
        Especificações Técnicas
      </h2>

      <div className="specs-grid">

        <div className="spec-card">

          <i className="fa-solid fa-mobile-screen-button"></i>

          <p className="spec-small">
            DISPLAY
          </p>

          <h3 className="spec-title">
            6.7" OLED Super Retina
          </h3>

          <p className="spec-desc">
            120Hz Pro-Flow, 2000 nits peak
          </p>

        </div>

        <div className="spec-card">

          <i className="fa-solid fa-microchip"></i>

          <p className="spec-small">
            CHIPSET
          </p>

          <h3 className="spec-title">
            A-16 Neural Core
          </h3>

          <p className="spec-desc">
            4nm architecture, 12-core GPU
          </p>

        </div>

        <div className="spec-card">

          <i className="fa-solid fa-camera"></i>

          <p className="spec-small">
            CAMERA
          </p>

          <h3 className="spec-title">
            Triple 50MP Lens
          </h3>

          <p className="spec-desc">
            8K ProRes Video, Night Sight 2.0
          </p>

        </div>

        <div className="spec-card active">

          <i className="fa-solid fa-battery-full"></i>

          <p className="spec-small">
            BATTERY
          </p>

          <h3 className="spec-title">
            5000mAh Lithium
          </h3>

          <p className="spec-desc">
            80W HyperCharge, Wireless 30W
          </p>

        </div>

      </div>

    </div>

  </section>

  <section className="products">

    <div className="container">

      <p className="small-tag">
        DESTAQUES
      </p>

      <h2 className="products-title">
        Os mais vendidos
      </h2>

      <div className="products-grid">

        <div className="product-card">

          <div className="card-image">
            <img src="" alt=""/>
          </div>

          <h3 className="card-title">
            Nome do Produto
          </h3>

          <p className="card-sub">
            Variação - do produto
          </p>

          <div className="card-stars">
            ★★★★★ (129)
          </div>

          <div className="card-bottom">

            <div>

              <div className="card-price">
                R$ 9.999,99
              </div>

              <div className="card-installment">
                10x de 999,99 sem juros
              </div>

            </div>

            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>

        <div className="product-card">

          <div className="card-image">
            <img src="" alt=""/>
          </div>

          <h3 className="card-title">
            Nome do Produto
          </h3>

          <p className="card-sub">
            Variação - do produto
          </p>

          <div className="card-stars">
            ★★★★★ (129)
          </div>

          <div className="card-bottom">

            <div>

              <div className="card-price">
                R$ 9.999,99
              </div>

              <div className="card-installment">
                10x de 999,99 sem juros
              </div>

            </div>

            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>

        <div className="product-card">

          <div className="card-image">
            <img src="" alt=""/>
          </div>

          <h3 className="card-title">
            Nome do Produto
          </h3>

          <p className="card-sub">
            Variação - do produto
          </p>

          <div className="card-stars">
            ★★★★★ (129)
          </div>

          <div className="card-bottom">

            <div>

              <div className="card-price">
                R$ 9.999,99
              </div>

              <div className="card-installment">
                10x de 999,99 sem juros
              </div>

            </div>

            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>


        <div className="product-card">

          <div className="card-image">
            <img src="" alt=""/>
          </div>

          <h3 className="card-title">
            Nome do Produto
          </h3>

          <p className="card-sub">
            Variação - do produto
          </p>

          <div className="card-stars">
            ★★★★★ (129)
          </div>

          <div className="card-bottom">

            <div>

              <div className="card-price">
                R$ 9.999,99
              </div>

              <div className="card-installment">
                10x de 999,99 sem juros
              </div>

            </div>

            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>

        <div className="product-card">

          <div className="card-image">
            <img src="" alt=""/>
          </div>

          <h3 className="card-title">
            Nome do Produto
          </h3>

          <p className="card-sub">
            Variação - do produto
          </p>

          <div className="card-stars">
            ★★★★★ (129)
          </div>

          <div className="card-bottom">

            <div>

              <div className="card-price">
                R$ 9.999,99
              </div>

              <div className="card-installment">
                10x de 999,99 sem juros
              </div>

            </div>

            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

          </div>

        </div>

      </div>

    </div>

  </section>

  <footer>

    <div className="container">

      <div className="footer-wrapper">

        <div>

          <div className="footer-logo">
            <img src="" alt=""/>
          </div>

          <p className="footer-text">
            Sua loja completa de celulares,
            eletrônicos e assistência técnica.
            Qualidade, confiança e tecnologia
            ao seu alcance.
          </p>

          <div className="socials">

            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-tiktok"></i>

          </div>

        </div>

        <div className="footer-column">

          <h4>Institucional</h4>

          <a href="#">Quem somos</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Trocas e devoluções</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Fale conosco</a>

        </div>

        <div className="footer-column">

          <h4>Categorias</h4>

          <a href="#">Celulares</a>
          <a href="#">Eletrônicos</a>
          <a href="#">Acessórios</a>
          <a href="#">Áudio</a>
          <a href="#">Informática</a>
          <a href="#">Smartwatch</a>
          <a href="#">Games</a>
          <a href="#">Casa Inteligente</a>
          <a href="#">Ofertas</a>

        </div>

        <div className="footer-column">

          <h4>Atendimento</h4>

          <a href="#">contato@gmail.com</a>
          <a href="#">(81) 9 9999-9999</a>
          <a href="#">Seg à Sex - 08h às 18h</a>
          <a href="#">Sab - 08h às 14h</a>

        </div>

      </div>

      <div className="copyright">
        2026 AC Store. Todos os direitos reservados.
      </div>

    </div>

  </footer>

</>
 )
}