"use client";
import Image from "next/image";
import { CardItem } from "../Card";
import { CarouselItens } from "../CarouselItens";
import { Button } from "../ui/button";

export const Section = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/j2KNhPB?afid=lJYfa5E8");
  };
  return (
    <div>
      <div className="w-full max-w-xl p-3 m-auto">
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
              className="flex items-center justify-center m-auto my-3"
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
      <div className="w-full max-w-xl flex gap-3 items-center justify-center p-3 m-auto">
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
    </div>
  );
};
