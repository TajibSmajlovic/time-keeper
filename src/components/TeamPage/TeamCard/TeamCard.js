import React from "react";

import classes from "./TeamCard.module.css";
import "./TeamCard.module.css";

import LnIcon from "../../../assets/servicesSVGIcons/linkedin.svg";
import GitIcon from "../../../assets/servicesSVGIcons/github-sign.svg";
import FbIcon from "../../../assets/servicesSVGIcons/facebook.svg";

const teamCard = props => (
    <div className={classes.TeamCard}>
        <img src={props.picture} alt={props.name} className={classes.Img} />
        <h2 className={classes.Name}>{props.name}</h2>
        <p className={classes.Role}>{props.role}</p>

        <p className={classes.About}>{props.about}</p>

        <hr />

        <div className={classes.ScIcons}>
            <a href={props.lnLink} target="_blank" className={props.Link}>
                <img src={LnIcon} alt="ln" className={classes.Icon} />
            </a>
            <a href={props.gitLink} target="_blank">
                <img src={GitIcon} alt="git" className={classes.Icon} />
            </a>
            <a href={props.fbLink} target="_blank">
                <img src={FbIcon} alt="fb" className={classes.Icon} />
            </a>
        </div>
    </div>
);

export default teamCard;
