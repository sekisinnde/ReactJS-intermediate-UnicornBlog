import React, { useState } from "react";
import {useEffect} from "react";
const Accueille = () => {

        return (
        <nav className="nav">
        <a href="/" className="site-title">Logo</a>
        <ul>
            <li className="active">
                <a href="/Upload">Upload</a>
            </li>
            <li>
                <a href="/Gallery">Gallery</a>
            </li>
        </ul>
      </nav>

    )

}
export default Accueille;