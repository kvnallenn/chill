import TopRate from "./TopRatingFilm";
import MyList from "./MyList";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_URL;

const Container = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(BASE_API_URL);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#181A1C] px-5 py-8 sm:px-8 md:px-10 lg:px-12">
        <MyList data={data} fetchData={fetchData} API={BASE_API_URL} />
        <TopRate title="Top Rating Film dan Series Hari ini" />
        <TopRate title="Film Trending" />
        <TopRate title="Rilis Baru" />
      </div>
    </>
  );
};

export default Container;
