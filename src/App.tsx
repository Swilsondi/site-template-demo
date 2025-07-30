import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
    </div>
  );
}

export default App;
