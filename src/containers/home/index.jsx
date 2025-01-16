import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const [text] = useTypewriter({
    words: ['Web Developer', 'Software Engineer', 'Backend Developer'],
    loop: 0, // 0 -> Infinite loop
    delaySpeed: 1500, // Delay between each word
  });

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Muhammadali
          <br />
          <h1>I'm
            <span>
              {` ${text}`}
            </span >
            <Cursor />
          </h1>
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
