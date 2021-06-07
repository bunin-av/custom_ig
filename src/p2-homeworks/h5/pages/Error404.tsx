import React from 'react'
import img from  './kitten1.png'

function Error404() {
    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
            <img src={img} style={{maxWidth: '300px'}}/>
            <div style={{fontSize: '5rem'}}>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
