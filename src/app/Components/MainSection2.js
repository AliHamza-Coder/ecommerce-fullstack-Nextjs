import '../styles/MainSection2.css';
const MainSection2 = () => {
  return (
    <section className="furniture">
      <h1>Discover the Latest in Furniture Design</h1>
      <div className="furniture-container">
        <div className="card">
          <div className="image">
            <img src="./images/10_compressed.jpg" alt="chair" />
          </div>
          <h3>Attractive Chairs for Your Home</h3>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/14_compressed_1_4.jpg" alt="chair" />
          </div>
          <h3>Sleep peacefully in our Attractive Sleeping Beds</h3>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/11_compressed_7.jpg" alt="chair" />
          </div>
          <h3>Living Room Stool</h3>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-card featured">
          <img src="./images/7._compressed_1_4.jpg" alt="chair" />
          <div className="product-content">
            <div className="sale-badge">50% OFF</div>
          </div>
        </div>
        <div className="grid-card counter-stool">
          <img src="./images/11_compressed_7.jpg" alt="counter stool" />
          <div className="product-content">
            <h2 className="grid-product-title">COUNTER<br />STOOL</h2>
          </div>
        </div>
        <div className="grid-card sofa">
          <img src="./images/8_compressed_1_5.jpg" alt="sofa" />
          <div className="product-content">
            <h2 className="grid-product-title">SOFA ITALYA</h2>
          </div>
        </div>
        <div className="grid-card living-room">
          <img src="./images/4_compressed_5.jpg" alt="living room" />
          <div className="product-content">
            <h2 className="grid-product-title">Modern Furniture</h2>
            <p style={{ color: 'rgb(210, 200, 200)', marginBottom: '1rem' }}>20% off selected items bid now</p>
            <a href="#" className="shop-now btn">See Furniture</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection2;
