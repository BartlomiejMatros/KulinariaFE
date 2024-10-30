"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import clsx from "clsx";

import Card from "@/components/card";
import { Category } from "@/types/menu";


interface CustomSwiperProps {
  category: Category;
}

const CustomSwiper: FC<CustomSwiperProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState<boolean | null>(false);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null); // Stan dla identyfikatora hoverowanej karty

  return (
    <>
      <h2 className="text-3xl font-medium mt-20 pb-2">{category.label}</h2>
      <section
        className="relative custom-swiper-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 15,
            },
            1536: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 15,
            },
            1920: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 15,
            },
          }}
          className="custom-swiper"
          modules={[Navigation]}
          navigation={{
            nextEl: `.swiper-button-next-unique-${category.name}`,
            prevEl: `.swiper-button-prev-unique-${category.name}`,
          }}
        >
          {category.dishes.map((dish, index) => (
            <SwiperSlide
              key={index}
              className={clsx("z-10", {
                "z-20": hoveredCardId === dish.id,
              })}
            >
              <Card
                key={index}
                dish={dish}
                isHovered={hoveredCardId === dish.id}
                onHover={setHoveredCardId}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`swiper-button-prev-unique-${category.name} absolute top-1/2 right-full w-10 h-full rounded-full flex items-center justify-center cursor-pointer transition duration-300 transform -translate-y-1/2 z-10 hover:scale-150`}
        >
          {isHovered && (
            <span className="border-black dark:border-gray-300 border-solid border-l-0 border-t-0 border-3 inline-block p-2 transform rotate-135" />
          )}
        </div>
        <div
          className={`swiper-button-next-unique-${category.name} absolute top-1/2 left-full w-10 h-full rounded-full flex items-center justify-center cursor-pointer transition duration-300 transform -translate-y-1/2 z-10 hover:scale-150`}
        >
          {isHovered && (
            <span className="border-black dark:border-gray-300 border-solid border-l-0 border-t-0 border-3 inline-block p-2 transform -rotate-45" />
          )}
        </div>
      </section>
    </>
  );
};

export default CustomSwiper;

//Wtorek: 29.10.2024
//Card na hover

//Sroda: 30.10.2024
//Zrobić Card z tekstem na dole
//i18n
//Wrzucić na repo githuba
