import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./types/techType";
import Footer from "./components/Footer";

const technologiesFetch = async():Promise<Itechnology[]>=>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}
function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2 className="min-h-screen flex items-center justify-center italic font-bold text-3xl">Loading ... ...</h2>}>
      <Technologies  technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
