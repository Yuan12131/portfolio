import React, { useState } from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import Image from "next/image";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project5 = () => {
  const [images] = useState([
    {
      src: "/history1.png",
      alt: "Image 1",
    },
    {
      src: "/history2.png",
      alt: "Image 3",
    },
    {
      src: "/history3.png",
      alt: "Image 2",
    },

    {
      src: "/history4.png",
      alt: "Image 4",
    },
    {
      src: "/history5.png",
      alt: "Image 5",
    },
    {
      src: "/history6.png",
      alt: "Image 6",
    },
    {
      src: "/history7.png",
      alt: "Image 7",
    }
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

export default Project5;
