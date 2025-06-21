"use client";
import Image from "next/image";
import { Button } from "../ui/button";

export const Banner = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/j2KNhPB?afid=lJYfa5E8");
  };
  return (
    <div className="w-full max-w-3xl m-auto p-3">
      <Image
        src="https://dicaparis.com/wp-content/uploads/sites/31/2015/08/comprando-maquiagem-paris.jpg"
        width={600}
        height={300}
        alt="Maquiagem"
        className="w-full m-auto"
      />
      <div className="text-center">
        Acesse agora os melhores fornecedores de maquiagem do Brasil e comece
        seu negócio HOJE!{" "}
        <span className="text-bold text-purple-500">
          {" "}
          Clique no botão abaixo
        </span>
      </div>
      <Button
        onClick={handlePayment}
        className="flex m-auto font-semibold animate-bounce mt-7"
      >
        GARANTA SEU CATÁLOGO AGORA
      </Button>
    </div>
  );
};
