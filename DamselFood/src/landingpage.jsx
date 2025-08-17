const Landingpage = () => {
    return ( 
       <div className="bg-amber-100 h-screen w-screen">
        <p className="text-orange-400 pl-8">Fresh 100% organic foods</p> 
        <div className="h-114 w-full bg-gray-300 flex p-4 justify-between">
         <p className="text-6xl text-blue-800 font-bold flex"> Demsel Fresh and Healthy <br /> Organic Garri</p>

              <div className="h-[450px] w-[790px] rounded-2xl p-8 -mt-8">
                  
                  <img src="src/img/download (2).jpeg" alt="" className="h-100% w-full rounded-md"/>
              </div>
           
        </div>
        {/* catigory */}
        <h2 className="text-center text-3xl text-blue-400 mb-8">Catigory</h2>
        <div className="flex justify-between px-12">
            {/* img-div */}
            <div className="h-66 w-66 bg-green-700 rounded-full">
                <img src="src/img/download.jpeg" alt="" className="h-full w-full rounded-full"/>
                <p className="text-center font-bold text-3xl">Ijebu Garri</p>
            </div>
       
            <div className="h-66 w-66 bg-green-700 rounded-full">
                <img src="src/img/download (1).jpeg" alt="" className="h-full w-full rounded-full"/>
                <p className="text-center  font-bold text-3xl">Yellow Garri</p>
            </div>
       
            <div className="h-66 w-66 bg-green-700 rounded-full">
                <img src="src/img/images.jpeg" alt="" className="h-full w-full rounded-full"/>
                <p className="text-center  font-bold text-3xl">White Garri</p>
            </div>
       

        </div>
      </div>
     )
}
 
export default Landingpage;