import React from "react";
import img1 from "./img/download.jpeg";
import img2 from "./img/download (1).jpeg";
import img3 from "./img/images.jpeg";

const LandingPage = () => {
  return (
    <div className="bg-amber-100 min-h-screen w-screen font-[Poppins]">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full my-6 rounded-2xl overflow-hidden">
        <img src="src/img/downloaded.jpeg" alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 text-gray-500 bg-opacity-50 flex flex-col justify-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 ">
            Damsel Food – High-Quality, Organic Garri
          </h2>
          <p className="max-w-2xl  text-white font-bold text-3xl">
            Premium quality garri made from the finest organic cassava. Naturally processed with no additives or preservatives.
          </p>
        </div>
      </div>

      {/* Category Section */}
      <h2 className="text-center text-3xl text-blue-500 mb-8">Category</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-8 pb-12">
        {/* Item 1 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-56 w-56 bg-green-700 rounded-full overflow-hidden">
            <img src={img1} alt="Ijebu Garri" className="h-full w-full object-cover" />
          </div>
          <p className="text-center font-bold text-2xl">Ijebu Garri</p>
          <button className="h-10 w-32 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition">
            BUY NOW
          </button>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-56 w-56 bg-green-700 rounded-full overflow-hidden">
            <img src={img2} alt="Yellow Garri" className="h-full w-full object-cover" />
          </div>
          <p className="text-center font-bold text-2xl">Yellow Garri</p>
           <button className="h-10 w-32 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition">
            BUY NOW
          </button>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-56 w-56 bg-green-700 rounded-full overflow-hidden">
            <img src={img3} alt="White Garri" className="h-full w-full object-cover" />
          </div>
          <p className="text-center font-bold text-2xl">White Garri</p>
           <button className="h-10 w-32 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
