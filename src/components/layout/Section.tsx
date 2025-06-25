"use client";
import Image from "next/image";
import { CardItem } from "../Card";
import { CarouselItens } from "../CarouselItens";
import { Button } from "../ui/button";
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { ShopeeAdCard } from "../ShopeeAdCard";
import { linkProducts2 } from "@/data/jsonLinks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const Section = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/j2KNhPB?afid=lJYfa5E8");
  };
  return (
    <div>
      <div className="w-full max-w-2xl p-3 m-auto">
        <CardItem
          title="Lista de Fornecedores de Maquiagem"
          description="Transforme Paixão em Lucro: Comece Agora na Revenda de Maquiagem!"
          footer="Só aqui você encontra os melhores fornecedores de maquiagem de SP"
          contentCard={
            <div className="">
              <video
                src="/videos/videomakes.mp4"
                width={400}
                height={300}
                className="w-full"
                controls
                controlsList="nodownload"
                disablePictureInPicture
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          }
        />
        <div className="">
          <CarouselItens />
          <div>
            <Button
              className="w-full flex m-auto font-semibold animate-pulse my-3 shadow-md shadow-purple-300 md:text-2xl md:p-5"
              onClick={handlePayment}
            >
              EU QUERO O CATÁLOGO
            </Button>
            <div className="text-center text-yellow-400 font-semibold">
              IMPORTANTE - DOS FORNECEDORES
            </div>
            <div>
              <ol>
                <li>- Preços por unidades somente por caixa fechada.</li>
                <li>
                  - Fazemos envios para todo o Brasil por ônibus, transportadora
                  ou correios.
                </li>
                <li>
                  - Melhores fornecedores de maquiagem e produtos de beleza.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl flex gap-3 items-center justify-center p-3 m-auto">
        <Image
          src={"/images/7dias.png"}
          alt="código de defesa do consumidor"
          width={90}
          height={90}
        />
        <div className="text-sm text-muted-foreground">
          O Código de Defesa do Consumidor permite ao consumidor desistir da
          compra em até 7 dias após o recebimento do produto ou serviço, sem
          necessidade de justificar a desistência e sem custos adicionais.{" "}
        </div>
      </div>
      <div className="w-full max-2xl m-auto text-center">
        <Image
          src={"/images/poster.png"}
          alt="código de defesa do consumidor"
          width={700}
          height={400}
          className="m-auto"
        />
        <Link
          className="w-36 m-auto flex justify-center bg-fuchsia-700 text-white p-1 rounded-md mt-1"
          href={"https://www.instagram.com/tudo_d_sp/?hl=pt-br"}
        >
          <Link2Icon />
          Instagram
        </Link>
      </div>

      <div className="w-full max-w-4xl m-auto p-7">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {linkProducts2.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="w-full h-full">
                  <ShopeeAdCard
                    title={item.title}
                    imageUrl={item.image}
                    link={item.offerLink}
                    price={item.price}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
