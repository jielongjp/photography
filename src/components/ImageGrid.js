import React from "react";


const ImageGrid = (props) => {
    return (
        <div className="mx-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3">
                <div className="flex justify-center rounded-xl shadow-lg">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-fill object-center shadow-lg"
                        src={props.image1} 
                    />
                </div>
                <div className="flex justify-center text-6xl rounded-xl  bg-gray-100">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                        src={props.image2} 
                    />
                </div>
                <div className="flex justify-center text-6xl rounded-xl  bg-gray-100">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                        src={props.image3} 
                    />
                </div>  
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 mb-3">
                <div className="flex justify-center rounded-xl bg-gray-100 shadow-lg">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-fill object-center shadow-lg"
                        src={props.image4}
                    />
                </div>
                <div className="flex justify-center text-6xl rounded-xl  bg-gray-100">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                        src={props.image5}
                    />
                </div>
                <div className="flex justify-center text-6xl rounded-xl  bg-gray-100">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                        src={props.image6}
                    />
                </div>  
                <div className="flex justify-center text-6xl rounded-xl  bg-gray-100">
                    <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center shadow-lg"
                        src={props.image7} 
                    />
                </div>  
            </div>
        </div>

    )
}

export default ImageGrid