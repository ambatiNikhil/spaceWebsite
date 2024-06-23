import React from "react";

const About = ({heading}) => {
  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrs6HFbGsM9h08BtfvPCKTbJSTkFpyGZewA&usqp=CAU"
          alt="about"
        />
        <div className="content">
          <h2>About page is here</h2>
          <p>
            Welcome to Galaxy Travel, where your journey to the stars begins.
            Our mission is to make space travel accessible, safe, and
            unforgettable for everyone.
          </p>
          <p>
            Explore the wonders of the cosmos with our state-of-the-art
            spacecraft. Experience the thrill of interstellar travel and
            discover new worlds beyond your imagination.
          </p>
          <p>
            At Galaxy Travel, we prioritize your comfort and safety, offering
            luxurious accommodations and expert guidance. Join us for a stellar
            adventure and create memories that are truly out of this world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
