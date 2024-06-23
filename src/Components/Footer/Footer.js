import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
const fb =
  "https://static.vecteezy.com/system/resources/thumbnails/024/864/751/small/isolated-facebook-logo-vector.jpg";
const twitter =
  "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-the-x-logo-in-3d-on-a-black-background-image_2935320.jpg";
const instagram =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVE3dTzdULBFeHudzLbcSimcanDMH7N3uJOg&usqp=CAU";

const Footer = () => {
  const social = [fb, twitter, instagram];
  return (
    <footer className="links">
      <h1>GLX TRVL</h1>
      <div style={{display : "flex" , flexDirection : "column" , gap : "15px" , justifyContent : "center" , alignItems : "center"}}>
        <h3>Useful links</h3> 
        <div className="link">
        <Link to="/">Home</Link>
        <Link to="/training">Training</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social">
        {social.map((item) => {
          return <img src={item} alt="social" />
        })}
      </div>
    </footer>
  );
};

export default Footer;
