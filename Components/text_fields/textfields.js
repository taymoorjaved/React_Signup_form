import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Mytextfields = (props) =>{
    return(
        <TextField id={props.id} label={props.label} type={props.type} autoComplete={props.autoComplete} />
    )
}

export default Mytextfields