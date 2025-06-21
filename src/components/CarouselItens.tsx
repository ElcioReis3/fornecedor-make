import * as React from "react";
import Image from "next/image"; // para otimização de imagens Next.js

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { arrayImages } from "@/data/arrayImages";

export function CarouselItens() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm m-auto py-7"
    >
      <CarouselContent>
        {arrayImages.map((item, index) => (
          <CarouselItem key={index} className="md:basis-96 lg:basis-2/4">
            <Card>
              <CardContent className="flex gap-2 items-center justify-center p-2">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
