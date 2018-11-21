import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import './NavItem.css'

export default class NavItem extends Component {
    static propTypes = {
        to: PropTypes.string,
        navName: PropTypes.string
    }
    render() {
        return (
            <div className='nav-item flex-item'>
                <Route
                    path={this.props.to}
                    children={({ match }) => {
                        console.log(match);
                        return (
                            <Link to={this.props.to}>{this.props.navName}</Link>
                        )
                    }}
                />
            </div>
        )
    }
}