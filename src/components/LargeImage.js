import React from "react";

const LargeImage = (props) => {
    return (
            <div className="shadow-lg pb-4">
                <img className="object-fill w-full h-screen" src={props.image} alt="" />
            </div>
    )
}

export default LargeImage