import axios from "axios";
import React, { useEffect, useState } from "react";

function Hero() {
  const [mainImg, setImg] = useState([]);
  const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  useEffect(() => {
    axios.get(API_URL).then((url) => {
      setImg(url.data.meals);
    });
  });

  return (
    <div className="w-full h-screen relative ">
      <img
        className=" w-full h-[80%] ob bg-blend-lighten object-cover select-none"
        src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=2000"
        alt=""
      />
      <div className="absolute top-[150px] max-h-24   md:top-[170px] lg:top-[200px] left-10 sm:left-24 max-w-md    ">
        <h2 className="mb-10 font-mono font-bold text-4xl text-white">
          Its all about food & taste
        </h2>
        <p className="font-sans font-semibold text-gray-300 text-shadow ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          illum cupiditate minus magni a perferendis quae, rerum similique? Qui
          sint corrupti minus alias facilis fuga quidem, in esse consequuntur
          voluptate?
        </p>
        <button class="bg-yellow-600 hover:bg-yellow-400 mt-5 text-white font-bold py-2 px-4 rounded">
          Order now
        </button>
      </div>
    </div>
  );
}

export default Hero;
