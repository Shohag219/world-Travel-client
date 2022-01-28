import React from "react";

const Banner = () => {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative mt-14"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
            className="block w-full"
            alt="Motorbike Smoke"
          />
          <div className="carousel-caption  absolute text-center text-white">
            <h5 className="text-xl">France Reopens Tourism</h5>
            <p style={{ textSizeAdjust: "auto" }}>
              The Marvels Of Paris Are Open Now!
            </p>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="carousel-caption  absolute text-center text-white">
            <h5 className="text-xl">Virtual Reality Travel</h5>
            <p> Experiences | VR Travel | 360 Production | Visualise</p>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src="https://media.istockphoto.com/photos/large-group-of-happy-friends-in-mountains-area-picture-id1166378619?k=20&m=1166378619&s=612x612&w=0&h=H6veT4N_pERB4FIJ19FAfdRJyiCwhzxkj8Y-bLWdMTw="
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption absolute text-center text-white">
            <h5 className="text-xl">Egypt Tours Portal</h5>
            <p>4 Main Types of Tourism in Egypt - Egypt Tours Portal</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
