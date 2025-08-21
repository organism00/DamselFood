import React from "react";
import img1 from "./img/download.jpeg";
import img2 from "./img/download (1).jpeg";
import img3 from "./img/images.jpeg";


const LandingPage = () => {
  return (
    <div className="bg-amber-100 min-h-screen w-full font-[Poppins]">
      {/* Hero Section */}
      <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] w-full my-6 overflow-hidden shadow-lg">
        <img
          src="src/img/downloaded.jpeg"
          alt="Damsel Food Garri"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center img bg-opacity-60 px-4 md:px-10">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">
            Discover Pure, Organic Garri
          </h1>
          <p className="max-w-2xl text-white font-medium text-lg md:text-2xl lg:text-3xl text-center mb-6">
            Experience the taste of tradition with our premium garri.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl shadow transition text-lg">
            Discover more
          </button>
        </div>
      </div>
    <section className=" gap-60">
      <div className="flex justify-between px-2">
          <div className="bg-zinc-500 h- w-92 rounded-sm">
            <p className="text-yellow-600 font-bold text-3xl ">Enjoy the satisfying granular texture of our garri.</p>
          </div>
<div className="bg-amber-100 w-10"></div>
        
          <div className="bg-zinc-500 h-54 w-92 rounded-sm">
            
          </div>
        
      </div>
      </section>

      {/* Category Section */}
      <h2 className="text-center text-2xl md:text-3xl text-blue-600 font-bold mb-8">Our Garri Varieties</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-8 pb-12">
        {/* Item 1 */}
        <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl shadow p-6">
          <div className="h-40 w-40 md:h-56 md:w-56 bg-green-700 rounded-full overflow-hidden">
            <img src={img1} alt="Ijebu Garri" className="h-full w-full object-cover" />
          </div>
          <p className="text-center font-bold text-xl md:text-2xl text-green-700">Ijebu Garri</p>
          <p className="text-center text-gray-600 text-sm md:text-base">
            Crisp, sour, and perfect for soaking. Loved for its unique taste and texture.
          </p>
          <button className="h-10 w-28 md:w-32 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition">
            Buy Now
          </button>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl shadow p-6">
          <div className="h-40 w-40 md:h-56 md:w-56 bg-yellow-600 rounded-full overflow-hidden">
            <img src={img2} alt="Yellow Garri" className="h-full w-full object-cover" />
          </div>
          <p className="text-center font-bold text-xl md:text-2xl text-yellow-700">Yellow Garri</p>
          <p className="text-center text-gray-600 text-sm md:text-base">
            Rich in flavor and color, ideal for eba and other traditional dishes.
          </p>
          <button className="h-10 w-28 md:w-32 bg-yellow-500 rounded-xl font-semibold text-white hover:bg-yellow-600 transition">
            Buy Now
          </button>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl shadow p-6">
          <div className="h-40 w-40 md:h-56 md:w-56 bg-gray-300 rounded-full overflow-hidden">
            <img src={img3} alt="White Garri" className="h-full w-full object-cover" />
          </div>
          <p className="text-center font-bold text-xl md:text-2xl text-gray-700">White Garri</p>
          <p className="text-center text-gray-600 text-sm md:text-base">
            Smooth and versatile, perfect for both drinking and making eba.
          </p>
          <button className="h-10 w-28 md:w-32 bg-gray-500 rounded-xl font-semibold text-white hover:bg-gray-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;