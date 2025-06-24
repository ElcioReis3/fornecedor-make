"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const Footer = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/j2KNhPB?afid=lJYfa5E8");
  };
  return (
    <footer className="">
      <div className="flex flex-col justify-center items-center gap-2 text-muted-foreground p-3">
        <Button
          className="w-full flex m-auto font-semibold my-3 shadow-md shadow-purple-300 md:text-2xl md:p-5"
          onClick={handlePayment}
        >
          COMPRAR LISTA DE FORNECEDORES
        </Button>
        <div className="max-w-4xl">
          <div className="text-center">Importante</div>
          <div className="text-sm">
            O acesso aos fornecedores será liberado somente após a confirmação
            do pagamento. Você receberá um e-mail com o link para download do
            e-book, que terá acesso vitalício ao conteúdo. Atualizações futuras
            poderão ser disponibilizadas sem custo adicional.
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="text-center">Imagens e Preços</div>
          <div className="text-sm">
            As imagens e valores exibidos neste site são ilustrativos. Os
            modelos e preços dos produtos podem variar conforme os fornecedores
            e a quantidade adquirida, estando sujeitos a alterações sem aviso
            prévio.
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-gray-700 p-7 text-muted-foreground font-semibold">
        Desenvolvido por{" "}
        <Link
          href={"https://www.instagram.com/elcioreis_cx/?hl=pt-br"}
          className="text-green-500"
        >
          ElcioServiçosOn
        </Link>
      </div>
    </footer>
  );
};
