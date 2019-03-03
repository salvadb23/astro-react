import React, { Component } from 'react'

export default function Astronauts(props) {

    if(props.astronauts == null){
        return (
            <h1></h1>
        )
    } else {
        if(props.astronauts !== undefined){
            const { people } = props.astronauts
            return (
                people.map((person) => (
                 <div className="astronauts">
                    <div className="individual"> <p className="name">Astronauts Name:</p> { person.name}</div> 
                    <div className="individual"> <p className="location">Where Are They:</p> { person.craft }</div> 
                 </div>
                 ))
            )
        }

    }

}