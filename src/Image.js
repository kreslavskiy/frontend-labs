import React from "react";

const Image = ({ index, counter, lastElementRef }) => {
  return (
    <div className="my-city-photo">
      <img
        ref={index === counter - 1 ? lastElementRef : null}
        id={`lviv-img-${index + 1}`}
        width="600"
        alt="lviv"
        src="https://media.istockphoto.com/id/831414782/photo/lviv-city-ukraine-panorama-of-the-ancient-city.jpg?s=612x612&w=0&k=20&c=KOf4rwmoiGdL_rqypj3ER8r9z2nfBw_eRzs9HQQm1vw="
      />
    </div>
  );
};

export default Image;
