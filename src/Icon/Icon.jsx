import React from "react"
import "./Icon.css"

export const Icon = ({link}) => {
    return <img src={`${link}favicon.ico`} className="page-icon" alt=""/>
}