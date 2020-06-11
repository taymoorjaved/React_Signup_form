import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import "./checkbox.css"

const Mycheckbox = (props) => {
    return(
    <Checkbox> {props.value}</Checkbox>
    )
}

export default Mycheckbox