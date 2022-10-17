import { FC } from "react";
import { FooterProps } from "./interfaces";
import "./index.css";

const Footer: FC<FooterProps> = ({ srcImage }) => {
    return (
        <footer
            className="footer image-block"
            style={{ backgroundImage: `url(${srcImage})` }}
        ></footer>
    );
};

export default Footer;
