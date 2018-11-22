import React, { Component } from 'react'
import './Content.css'

export default class Content extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <div className='content'>我是{this.props.location.state.name}，我的search为：{this.props.location.search}，我的hash为：{this.props.location.hash}</div>
            </div>
        )
    }
}