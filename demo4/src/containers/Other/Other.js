import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Other.css'

export default class Other extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='other'>我是其他</div>
            </div>
        )
    }
}