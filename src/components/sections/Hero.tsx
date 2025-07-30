export const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Build Stunning Websites Effortlessly
        </h2>
        <p className="text-gray-300 mb-6 text-lg md:text-xl">
          Launch your online presence with high-converting, fast-loading, and
          beautiful web templates — built for speed and style.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#demos"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Demo Sites
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
