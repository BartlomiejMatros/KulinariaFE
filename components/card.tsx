import { FC } from "react";
import { Card as NextUICard, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { Dish } from "@/types/menu";

interface CardProps {
  dish: Dish;
  isHovered: boolean;
  onHover: (hoveredIndex: number | null) => void;
}

const Card: FC<CardProps> = ({ dish, isHovered, onHover }) => {
  return (
    <NextUICard
      isFooterBlurred
      className={clsx(
        "border-none transform transition-transform duration-300 ease-in-out z-10 overflow-visible",
        {
          "scale-125 -translate-y-16 shadow-lg z-20": isHovered,
        }
      )}
      radius="lg"
      onMouseEnter={() => onHover(dish.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image alt={dish.label} className="object-cover z-20" src="/images/test.png" />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden absolute py-4 before:rounded-xl bottom-1 w-full shadow-small z-30">
        <p className="text-white/80">{dish.label}</p>
      </CardFooter>
      {isHovered && (
        <div className="w-full justify-center absolute -bottom-8 text-center z-10 bg-black/50 text-white py-2">
          {dish.label}
        </div>
      )}
    </NextUICard>
  );
};

export default Card;
