import Image from "next/image";
import { Header } from "./components/heroheader";
import { Play } from "./components/section/play";
import { BestSeller } from "./components/section/bestseller";
import { Together } from "./components/section/together";
import { SansSports } from "./components/section/sanssports";

export default function Home() {
  return (
    <>
    <Header />
    <Play />
    <BestSeller />
    <Together />
    <SansSports />
    </>
  );
}
