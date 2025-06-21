"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <div className="my-3 p-3">
      <div className="text-center font-semibold">PERGUNTAS FREQUENTES</div>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>O site é seguro?</AccordionTrigger>
          <AccordionContent>
            Sim! Nosso site possui conexão segura (SSL) e as transações são
            processadas por plataformas confiáveis como Kiwify e Mercado Pago.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Como vou receber minha lista com os top fornecedores ocultos?
          </AccordionTrigger>
          <AccordionContent>
            Após a confirmação do pagamento, você receberá um e-mail com o link
            para download do e-book contendo a lista completa.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Quais são as formas de pagamento?</AccordionTrigger>
          <AccordionContent>
            Aceitamos cartão de crédito, boleto bancário, Pix e carteiras
            digitais, conforme opções disponíveis na plataforma Kiwify.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Posso parcelar no boleto?</AccordionTrigger>
          <AccordionContent>
            Infelizmente, o boleto bancário só permite pagamento à vista. Para
            parcelamento, recomendamos o uso de cartão de crédito.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Os fornecedores da lista são seguros?
          </AccordionTrigger>
          <AccordionContent>
            Sim. Selecionamos fornecedores com boa reputação, alto volume de
            vendas e feedbacks positivos. Sempre recomendamos que você entre em
            contato com cada fornecedor antes de fechar negócio.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Por que é tão barato assim?</AccordionTrigger>
          <AccordionContent>
            Nosso objetivo é democratizar o acesso a bons fornecedores e ajudar
            pequenos empreendedores a começar com pouco investimento. Não
            cobramos caro para garantir que mais pessoas possam ter acesso.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
