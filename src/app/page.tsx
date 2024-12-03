import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import Skill from "./skill/page";
import About from "./about/page";

export default function Home() {
  return (
    <div className="container">
      <h1>
<Hero/>
<Skill/>
<About/>
        
      </h1>
    </div>
  );
}
