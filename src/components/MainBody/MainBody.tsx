import { FC, useEffect, useState } from "react";
import { MainBodyProps } from "./interfaces";
import { TIMEOUT_FOR_SHUFFLE_IMAGES } from "./config";

import "./index.css";
import { generateRandomColor } from "../../helpers/generateRandomColor";

const MainBody: FC<MainBodyProps> = ({ srcImage, shuffleImages }) => {
    const [color, setColor] = useState(generateRandomColor);

    useEffect(() => {
        const intervalId = setInterval(() => {
            shuffleImages();
        }, TIMEOUT_FOR_SHUFFLE_IMAGES);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleButtonClick = () => {
        setColor(generateRandomColor());
        shuffleImages();
    };

    return (
        <main
            className="main-body image-block"
            style={{ backgroundImage: `url(${srcImage})` }}
        >
            <button
                onClick={handleButtonClick}
                style={{ backgroundColor: color }}
                className="btn-move"
            >
                Shuffle images
            </button>
        </main>
    );
};

export default MainBody;
