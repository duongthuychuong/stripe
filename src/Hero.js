import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalState } from "./context";
const Hero = () => {
  const { setIsSubmenuOpen } = useGlobalState();
  return (
    <section
      className="hero"
      onMouseOver={() => {
        setIsSubmenuOpen(false);
      }}
    >
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images"></article>
      </div>
    </section>
  );
};

export default Hero;
