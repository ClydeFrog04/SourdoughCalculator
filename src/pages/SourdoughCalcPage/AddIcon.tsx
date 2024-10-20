import React from "react";

interface AddIconProps {
    width?: number;
    height?: number;
}

const AddIcon = ({width, height}: AddIconProps) =>{
    const TAG = "[AddIcon.tsx]";


    return (
        <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img"
             className="iconify iconify--logos" width={width ? width : 32} height={height ? height : 32} preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 64 64">
            <circle r="32" cx="32" cy="32" fill="white"/>
            <rect width="10" height="48" x="27" y="8" fill="black"/>
            <rect width="10" height="48" x="27" y="-56" transform="rotate(90)" />
        </svg>

    );
}

export default AddIcon;
