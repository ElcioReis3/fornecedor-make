"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ShopeeAdCardProps {
  title: string;
  imageUrl: string;
  link: string;
  price: string;
}

export function ShopeeAdCard({
  title,
  imageUrl,
  link,
  price,
}: ShopeeAdCardProps) {
  return (
    <Card className="w-full max-w-96">
      <Link href={link}>
        <Image
          src={imageUrl}
          alt={title}
          width={260}
          height={160}
          className="h-56 rounded-t-md object-cover m-auto"
        />
      </Link>
      <CardContent className="pt-4">
        <Link href={link}>
          <Image
            src="/images/Shopee.png"
            alt={title}
            width={50}
            height={40}
            className=" object-cover m-auto"
          />

          <h3 className="text-base font-semibold line-clamp-2 ">{title}</h3>
        </Link>
        <p className="text-xs md:text-sm text-muted-foreground">
          Oferta especial Shopee
        </p>
        <span>R$ {price}</span>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-orange-400 hover:bg-orange-500">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Ver na Shopee
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
