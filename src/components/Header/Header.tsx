import { FC } from "react";
import { HeaderProps } from "./interfaces";
import "./index.css";

const Header: FC<HeaderProps> = ({ srcImage }) => {
    return (
        <header
            className="header image-block"
            style={{ backgroundImage: `url(${srcImage})` }}
        ></header>
    );
};

export default Header;
