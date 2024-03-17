import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const SingleImage = (props) => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Zoom]}
        slides={[{ src: props.image }]}
        className="single-image"
      />

      <div
        className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none cursor-pointer hover:opacity-90"
        onClick={handleImageClick}
      >
        <img alt="" src={props.image} />
      </div>
    </>
  );
};

export default SingleImage;
