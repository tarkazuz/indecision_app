import React from 'react';

const Header = (props)=>{
    return (
        <div className="header">
            <div className='brand'>
                <img src='./src/styles/brand.png'></img>
                <h1>
                    {props.title}
                </h1>
            </div>
            { props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
;}

Header.defaultProps={
title: "Indecision"
}

export default Header;