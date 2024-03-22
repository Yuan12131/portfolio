import React, { useState } from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import Image from "next/image";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project4 = () => {
  const [images] = useState([
    {
      src: "/community1.png",
      alt: "Image 1",
    },
    {
      src: "/community2.png",
      alt: "Image 3",
    },
    {
      src: "/community3.png",
      alt: "Image 2",
    },

    {
      src: "/community4.png",
      alt: "Image 4",
    },
    {
      src: "/community5.png",
      alt: "Image 5",
    },
    {
      src: "/community6.png",
      alt: "Image 6",
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

export default Project4;
