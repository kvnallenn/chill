import FilmList from "./db";

const DataFilm = ({ trackRef }) => {
  return (
    <div
      ref={trackRef}
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:gap-5 md:gap-6 [&::-webkit-scrollbar]:hidden"
    >
      {FilmList.map((film) => (
        <div
          key={film.id}
          className="relative aspect-[2/3] w-[138px] shrink-0 snap-start overflow-hidden rounded-[4px] sm:w-[160px] md:w-[180px] lg:w-[210px]"
        >
          <img
            src={film.url}
            alt={film.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute right-0 top-0 rounded-bl-[4px] bg-[#E50914] px-1.5 py-1 text-center text-[10px] font-[500] leading-tight text-white sm:px-2 sm:text-[12px]">
            Top
            <br />
            10
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataFilm;
