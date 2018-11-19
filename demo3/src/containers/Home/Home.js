import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='home'>我是主页</div>
            </div>
        )
    }
}