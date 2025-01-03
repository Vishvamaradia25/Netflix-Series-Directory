import React from "react";
import Images from "./Image";

function Card(props){
    return(
            <>
                <div className="cards">
                 <div className="card">
                 <Images imgsrc={props.imgsrc} />
                    {/* <img src={props.imgsrc} alt="" className=""></img> */}
                    <div className="card-info">
                    <span className="card-category">{props.title}</span>
                    <h3 className="card-title">{props.sname}</h3>
                   <a href={props.link} target="blank" style={{ textDecoration: 'none' }}>
                   <div className="btn"><button>Watch Now</button></div>   
                   </a>
                    </div>
                 </div>
                </div>
            </>
        );
    }

export default Card;