import React from"react";
import "./Home.css";
import Product from "./Product.js";
function Home(){
    return(
        <div className="Home">
          <div className="home_container">
          <img className="Home_Image" src="https://www.androidauthority.com/wp-content/uploads/2019/06/amazon-prime-video-originals-one-840x365.jpg.webp"
           alt=""/>
        
             <div className="home_row">
                <Product 
                    title="A book thats helps you to understand life" 
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51P3BqJ5fFL._SX323_BO1,204,203,200_.jpg"
                    rating={4}
                />
                <Product
                    title="Goorej Mixer With fully automatic feature"
                    price={24.50}
                    image="https://m.media-amazon.com/images/I/419K73+cBsL.jpg"
                    rating={3}
                    />
                <Product
                    title="A play station for all game enthusiast"
                    price={54.50}
                    image="https://m.media-amazon.com/images/I/51+OaHk+daS._SL1484_.jpg"
                    rating={5}/>
             </div>
             <div className="home_row">
                 <Product
                    title="BoaT-Music for life"
                    price={30.20}
                    image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg"
                    rating={2}/>
                 <Product
                     title="Kurti-An attire which suits  you"
                     price={10.20}
                     image="https://m.media-amazon.com/images/I/71956cSwbpL._UL1500_.jpg"
                     rating={4}/>
                 <Product
                      title="Hoody for a Moody"
                      price={9.20}
                      image="https://m.media-amazon.com/images/I/51PCLwOAYsL._UL1100_.jpg"
                      rating={3}/>
             </div>
              <div className="home_row">
                   <Product
                     title="Everything about kitchen"
                     price={19.20}
                     image="https://m.media-amazon.com/images/I/81R+8OffAyL._SL1500_.jpg"
                     rating={4}/>
                   <Product
                      title="Make-Up for girls who love to do"
                      price={100.20}
                      image="https://m.media-amazon.com/images/I/41PpanWpPFL.jpg"
                      rating={4}/>
                      <Product
                      title="The watch which keeps yor health track"
                      price={40.20}
                      image="https://m.media-amazon.com/images/I/41Nzx6heB5L._SL1200_.jpg"
                      rating={5}/>
             </div>
        </div>

          






        </div>
    )
}
export default Home