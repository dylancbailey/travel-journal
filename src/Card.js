import React from "react";

function Card(props) {
    return(
        <section className="card">
            <img src={props.img} alt={props.title} className="card--img"/>
            <div className="card--location-content">
                <p className="card--location">
                    <span className="card--location-dot"><i className="fa-solid fa-location-dot"></i></span>
                    {props.location.toUpperCase()}
                    <a href={props.googleMapsUrl} className="card--location-link">View on Google Maps</a>
                </p>
                <h3 className="card--location-title">{props.title}</h3>
                <p className="card--location-date">{props.startDate} - {props.endDate}</p>
                <p className="card--location-desc">{props.description}</p>
            </div>
        </section>
    );
}

export default Card;