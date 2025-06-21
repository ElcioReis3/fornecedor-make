"use client";
import { ThemeButtom } from "../theme-buttom";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center p-1">
        <h1 className="font-semibold text-red-500">ATENÇÃO:</h1>
        <h3> Assista o vídeo até o final e...</h3>
        {/*  <ThemeButtom /> */}
      </div>
      <div className="max-w-3xl m-auto text-center">
        <h2 className="text-3xl font-bold">
          Do Sonho ao Negócio: Conquiste sua Independência{" "}
          <span className="text-violet-700 animate-pulse">
            Vendendo Maquiagem!
          </span>
        </h2>
      </div>
    </header>
  );
};
