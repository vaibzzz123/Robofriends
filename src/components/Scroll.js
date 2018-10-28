import React from 'react';

const Scroll = (props) => { //in the style tag in JSX, an object is created, which has CSS properties
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;