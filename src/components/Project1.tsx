import React, { useState } from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import Image from "next/image";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project1 = () => {
  const [images] = useState([
    {
      src: "/toui.png",
      alt: "Image 1",
    },
    {
      src: "/toui3.png",
      alt: "Image 3",
    },
    {
      src: "/toui2.GIF",
      alt: "Image 2",
    },

    {
      src: "/toui4.png",
      alt: "Image 4",
    },
    {
      src: "/toui5.png",
      alt: "Image 5",
    },
    {
      src: "/toui6.png",
      alt: "Image 6",
    },
    {
      src: "/toui7.png",
      alt: "Image 7",
    },
    {
      src: "/toui8.png",
      alt: "Image 8",
    },
  ]);

  const settings = {
    infinite: true,
    dots: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: 1, // 보여지는 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
  };

  return (
    <div className={styles.project}>
      <Slick {...settings}>
        {images.map((image: any) => (
          <div className={styles.slider} key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
        ))}
      </Slick>
    </div>
  );
};

export default Project1;
