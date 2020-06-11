import React from "react";
import Button from "@material-ui/core/Button";

import "./button.css"

const Mybutton = (props) => {
    return(
        <Button variant={props.variant} color={props.color}> signup</Button>
    )
}

export default Mybutton