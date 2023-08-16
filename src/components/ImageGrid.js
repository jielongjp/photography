import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const ImageGrid = (props) => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const images = [
        props.image1, 
        props.image2, 
        props.image3, 
        props.image4, 
        props.image5,
        props.image6,
        props.image7
    ];

    const handleImageClick = (index) => {
        setOpen(true);
        setImageIndex(index);
    };

    const renderImage = (src, index) => (
        <div className="flex justify-center rounded-xl bg-gray-100 shadow-lg" key={index}>
            <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-lg cursor-pointer"
                src={src}
                onClick={() => handleImageClick(index)}
            />
        </div>
    );

    return (
        <>
            <Lightbox
                open={open}
                index={imageIndex}
                close={() => setOpen(false)}
                plugins={[Captions]}
                slides={images.map((src) => ({ src }))}
            />
        
            <div className="mx-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
                    {images.slice(0, 3).map((src, index) => renderImage(src, index))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 mb-3">
                    {images.slice(3).map((src, index) => renderImage(src, index + 3))}
                </div>
            </div>
        </>
    );
};

export default ImageGrid;
