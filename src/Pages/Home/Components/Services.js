import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let img1 =
  "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-156166,resizemode-75,msid-95617039/magazines/panache/beyond-the-milky-way-how-many-galaxies-are-there-in-the-universe.jpg";
let img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5XOqa-BbpUxtONBNfszaJ5Oyf0qMXVZCIA&usqp=CAU";
let img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iXAwRv49RkoI4o8iwlSrNItA3xRvrWPodg&usqp=CAU";
let img4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1K7_ORYBZtI0JeBzxGGwVJte2qHVflUIYQ&usqp=CAU";
let img5 =
  "https://www.hindustantimes.com/ht-img/img/2023/10/02/900x1600/Galaxy_NASA_1696227617147_1696227624542.jpg";

let imagesArray = [img1, img2, img3, img4, img5];

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <h2 className="heading">Services</h2>
      <section className="services">
        <Slider {...settings}>
          {imagesArray.map((image) => {
            return (
              <div>
                <img src={image} alt="galaxy" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Services;
