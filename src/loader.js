import React from 'react';
import './loader.css'


const Loader = ({text}) => {
    return (
        <div class="ui segment loader-container">
            <div class="ui active inverted dimmer">
                <div class="ui text loader">{text}</div>
            </div>
            <p></p>
        </div>
    )
}

Loader.defaultProps={
    text: 'loader.....'
}

export default Loader;