import { FC } from "react";
import { LeftPanelProps } from "./interfaces";
import "./index.css";

const LeftPanel: FC<LeftPanelProps> = ({ srcImage }) => {
    return (
        <div
            className="left-panel image-block"
            style={{ backgroundImage: `url(${srcImage})` }}
        ></div>
    );
};

export default LeftPanel;
