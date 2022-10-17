import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LeftPanel } from "./components/LeftPanel";
import { MainBody } from "./components/MainBody";
import { RightPanel } from "./components/RightPanel";
import { useState } from "react";

import cats from "./assets/images/cats.jpg";
import chubaka from "./assets/images/chubaka.jpg";
import dogs from "./assets/images/dogs.jpg";
import dyno from "./assets/images/dyno.jpg";
import planets from "./assets/images/planets.jpg";
import { shuffleArray } from "./helpers/shuffleArray";

function App() {
    const [imagesList, setImagesList] = useState<string[]>([
        cats,
        chubaka,
        dogs,
        dyno,
        planets,
    ]);

    const shuffleImages = (): void => {
        setImagesList(shuffleArray([...imagesList]));
    };

    return (
        <div className="App">
            <Header srcImage={imagesList[0]} />
            <div className="main-content">
                <LeftPanel srcImage={imagesList[1]} />
                <MainBody
                    shuffleImages={shuffleImages}
                    srcImage={imagesList[2]}
                />
                <RightPanel srcImage={imagesList[3]} />
            </div>
            <Footer srcImage={imagesList[4]} />
        </div>
    );
}

export default App;
