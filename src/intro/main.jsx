import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import './style.css';
gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  const w = 1240;
  const h = 874;

  useEffect(() => {
    const images = gsap.utils.toArray('img');
    const loader = document.querySelector('.loader--text');

    const updateProgress = (instance) => {
      loader.textContent = `${Math.round((instance.progressedCount * 100) / images.length)}%`;
    };

    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

      gsap.utils.toArray('section').forEach((section, index) => {
        const wrapper = section.querySelector('.wrapper');
        const [x, xEnd] = index % 2
          ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(wrapper, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        });
      });
    };

    imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
  }, []);

  return (
    <>
      <div className="loader df aic jcc">
        <div>
          <h1>Loading</h1>
          <h2 className="loader--text">0%</h2>
        </div>
      </div>

      <div className="demo-wrapper">
        <header className="df aic jcc">
          <div>
            <h1>ScrollTrigger</h1>
            <h2>demo</h2>
          </div>
        </header>

        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>

        {[...Array(4).keys()].map((i) => (
          <section key={i} className="demo-gallery">
            <ul className="wrapper">
              {[...Array(Math.floor(Math.random() * (4 - 3 + 1)) + 3).keys()].map((j) => (
                <li key={j}>
                  <img
                    src={`https://source.unsplash.com/random/${w}x${h}?sig=${Math.floor(Math.random() * 207)}`}
                    width={w}
                    height={h}
                    alt={`Random ${i}-${j}`}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="demo-text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>

        <footer className="df aic jcc">
          <p>
            Images from <a href="https://unsplash.com/">Unsplash</a> and js (babel)
          </p>
        </footer>
      </div>
    </>
  );
};

export default MyComponent;
