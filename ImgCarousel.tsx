import React, { useEffect, useRef, useState } from "react";
import "./ImgCarousel.css";

// Author: M. Vagnon

interface ImgCarouselProps {
  images: Array<string>;
  slideSpeed?: number;
}
export default function ImgCarousel(props: ImgCarouselProps) {
  const { images, slideSpeed, ...other } = props;
  const [current, setCurrent] = useState(0);
  const [img0, setImg0] = useState(images.length - 1);
  const [img1, setImg1] = useState(0);
  const [img2, setImg2] = useState(1 % images.length);
  const setImgs = [setImg0, setImg1, setImg2];

  function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef() as React.MutableRefObject<() => void>;

    // Remember the latest callback
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      const imgElements = [
        document.querySelector(".carousel-img.img-left"),
        document.querySelector(".carousel-img.img-center"),
        document.querySelector(".carousel-img.img-right"),
      ];

      imgElements[0]?.classList.replace("img-left", "img-right");
      imgElements[1]?.classList.replace("img-center", "img-left");
      imgElements[2]?.classList.replace("img-right", "img-center");
      setImgs[current % imgElements.length](
        (current + imgElements.length - 1) % images.length
      );
      setCurrent((prevState) => prevState + 1);
    },
    slideSpeed ? slideSpeed : 10000
  );

  return (
    <React.Fragment>
      <div className="carousel-container" {...other}>
        <div
          className="carousel-img img-left"
          style={{
            backgroundImage: `url(${images[img0]})`,
          }}
        />
        <div
          className="carousel-img img-center"
          style={{
            backgroundImage: `url(${images[img1]})`,
          }}
        />
        <div
          className="carousel-img img-right"
          style={{
            backgroundImage: `url(${images[img2]})`,
          }}
        />
      </div>
    </React.Fragment>
  );
}
