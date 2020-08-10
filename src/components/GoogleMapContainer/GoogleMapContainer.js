import React from 'react';

export function GoogleMapContainer(props) {
    return (
        <div>
            {!(props.loaded) &&
                <div>Hello World!</div>
            }
        </div>
    )
}