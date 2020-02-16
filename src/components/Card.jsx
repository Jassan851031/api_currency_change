import React from 'react';
import '../assets/styles/components/Card.css';
import 'currency-flags/dist/currency-flags.min.css';

/**
 * Tarjeta donde se mostrará la información
 * @author Jorge
 */
const Card = ({ currSource, currDestiny, date, value, display }) => {
    return(
        (display.length < 1 || currDestiny.toLowerCase().includes(display.toLowerCase())) &&
        <div id={currDestiny} className="col-sm-3 col-md-3 pb-4">
          <div className="card card-outline-info">
            <div className="card-block">
                <div className="card border-primary">
                    <div className="card-header d-flex justify-content-center">{currSource} x {currDestiny}</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title d-flex justify-content-center">{value}</h5>
                        <p className="card-text">{date}</p>
                    </div>
                    <div class={"currency-flag currency-flag-" + currDestiny.toLowerCase()}></div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Card;