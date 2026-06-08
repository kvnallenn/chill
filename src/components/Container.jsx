import TopRate from "./TopRatingFilm";
import MyList from "./MyList";
import { useEffect, useState } from "react";

const Container = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://6a26cd48a84f9d39e907e9c4.mockapi.io/api/v1/favorites",
    );
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#181A1C] px-5 py-8 sm:px-8 md:px-10 lg:px-12">
        <MyList data={data} fetchData={fetchData} />
        <TopRate title="Top Rating Film dan Series Hari ini" />
        <TopRate title="Film Trending" />
        <TopRate title="Rilis Baru" />
      </div>
    </>
  );
};

export default Container;
