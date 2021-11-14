import React from 'react';
import '../App.css';

export default function Button(props){
    return(
        <button class={props.className} onClick={props.onClick}>{props.name}</button>
    )
}