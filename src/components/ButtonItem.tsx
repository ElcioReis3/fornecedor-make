"use client";
import { Button } from "./ui/button";

type Props = {
  text: string;
  animate?: boolean;
};

export const ButtonItem = ({ text }: Props) => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/j2KNhPB?afid=lJYfa5E8");
  };
  return (
    <Button
      onClick={handlePayment}
      className="w-full flex m-auto font-semibold animate-bounce mt-7 shadow-md shadow-purple-300 md:text-2xl md:p-5"
    >
      {text}
    </Button>
  );
};
