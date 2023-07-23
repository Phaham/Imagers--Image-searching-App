import React, { useRef } from 'react'
import "../css/Hero.css"
import SearchIcon from '@material-ui/icons/Search'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'

import { useHistory } from "react-router-dom"

function Hero() {
    const history = useHistory()
    const inputRef = useRef()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const search = inputRef.current.value
        if (search)
            history.push(`/s/${search}`)
    }

    return (
        <div className="hero">
            <img src="https://i2.paste.pics/OUX36.png" alt="hero img" className="hero__image" />

            <div className="hero__content">
                <div className="hero__contentWrapper">
                    <h1 className="hero__contentTitle">Discover over 2,000,000 free Stock Images</h1>
                    <form onSubmit={handleSearchSubmit} className="hero__contentInput">
                        <SearchIcon className="header__icon" />
                        <input ref={inputRef} type="text" className="hero__contentInputField" placeholder="Search" />
                        <ImageSearchIcon className="header__icon" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Hero
