import { FC } from "react";
import { RightPanelProps } from "./interfaces";
import "./index.css";

const RightPanel: FC<RightPanelProps> = ({ srcImage }) => {
    return (
        <div
            className="right-panel image-block"
            style={{ backgroundImage: `url(${srcImage})` }}
        ></div>
    );
};

export default RightPanel;
