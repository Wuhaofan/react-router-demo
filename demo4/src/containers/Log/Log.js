import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './Log.css'

export default class Log extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='log'>我是日志</div>
            </div>
        )
    }
}