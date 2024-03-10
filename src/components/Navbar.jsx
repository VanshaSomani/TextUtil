import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">{props.title}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/textform">TextForm</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/aboutus">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
//use propTypes insted of PropType else it will show error
// ERROR in [eslint]
// src\components\Navbar.jsx
//   Line 30:8:  Typo in static class property declaration  react/no-typos
// title: PropTypes.string.isRequired

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title Here"
}