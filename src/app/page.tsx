import { FaqAccordion } from "@/components/FaqAccordion";
import { Banner } from "@/components/layout/Banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/layout/Section";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Section />
      <FaqAccordion />
      <Footer />
    </>
  );
}
