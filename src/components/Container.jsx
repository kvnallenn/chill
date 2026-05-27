import TopRate from "./TopRatingFilm";

const Container = () => {
  return (
    <>
      <div className="bg-[#181A1C] px-5 py-8 sm:px-8 md:px-10 lg:px-12">
        <TopRate title="Top Rating Film dan Series Hari ini" />
        <TopRate title="Film Trending" />
        <TopRate title="Rilis Baru" />
      </div>
    </>
  );
};

export default Container;
