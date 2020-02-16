import React from 'react';

/**
 * 
 * @param {children} Card 
 */
const CardContainer = ({children}) => {
    return(
            <div className="container mt-5">
                <div className="row">
                    {children}
                </div>
            </div>
    );
}

export default CardContainer;