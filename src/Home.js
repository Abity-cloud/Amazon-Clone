import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
        <Product
            id="Core i5"
            title="HP Elite Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram, 1 TB Hard Drive, DVDRW, 19 Inch LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10 (Renewed)"
            price={579.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/61PlVVOd3QL._AC_UY218_.jpg"
          />
          <Product
            id="23445923"
            title="New Apple iPhone 12 Pro (256GB, Pacific Blue) [Locked] + Carrier Subscription"
            price={1099.09}
            rating={5}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="23445939"
            title="Brother MFC-J497DW Inkjet Multifunction Printer - Color - Plain Paper Print - Desktop"
            price={161.38}
            rating={5}
            image="https://m.media-amazon.com/images/I/513mkc3wKDL._AC_UY218_.jpg"
          />


<Product
            id="3254354354"
            title="Char-Broil Classic 360 3-Burner Liquid Propane Gas Grill"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81riNz4wRFL._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="4903853"
            title="bopmen T3 Wired Over Ear Headphones - Stereo Sound Headphones with Tangle Free Cord Bass Comfortable Headphones, Lightweight Portable for Smartphone Tablet Computer PC Laptop Notebook"
            price={17.71}
            rating={5}
            image="https://m.media-amazon.com/images/I/51JgVRxaT3L._AC_UL320_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
           </div>
           <div className="home__row">
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
        </div>
           
      </div>
    </div>
  );
}

export default Home;
