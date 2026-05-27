import { useRef } from "react";
import DataFilm from "./DataFilm";

const TopRate = (props) => {
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    if (!trackRef.current) return;

    const scrollDistance = trackRef.current.clientWidth * 0.85;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      <h1 className="mb-4 mt-5 text-[20px] font-bold text-white sm:text-[24px] md:mb-5 md:text-[28px] lg:text-[32px]">
        {props.title}
      </h1>
      <div className="group relative">
        <button
          type="button"
          aria-label="Geser ke kiri"
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#2F3334] text-white shadow-lg sm:flex md:h-11 md:w-11"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
          >
            <path
              d="m15 6-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <DataFilm trackRef={trackRef} />

        <button
          type="button"
          aria-label="Geser ke kanan"
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#2F3334] text-white shadow-lg sm:flex md:h-11 md:w-11"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
          >
            <path
              d="m9 6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TopRate;
